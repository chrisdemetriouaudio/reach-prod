/**
 * Cloudflare Worker — contact form gateway for reach-children-uganda.org.uk
 *
 * Flow: the website form POSTs here → this Worker verifies the Cloudflare
 * Turnstile token (server-side), checks the honeypot, then e-mails the message
 * straight to the charity inbox through Cloudflare Email Routing (the EMAIL
 * binding, locked to that one verified address). No third-party spam filter,
 * so real messages can't be quarantined. Reply-To is the visitor.
 *
 * Set on the Worker:
 *   TURNSTILE_SECRET  (Secret) – the Turnstile SECRET key (wrangler secret put)
 *
 * Only the charity's own pages may post here, the Turnstile token must have been
 * issued for the charity's site, and every field is length-checked.
 */

import { EmailMessage } from 'cloudflare:email';

const FROM = 'forms@reach-children-uganda.org.uk';
const TO = 'reachchildrenuganda@outlook.com';

const ALLOWED_ORIGINS = [
  'https://reach-children-uganda.org.uk',
  'https://www.reach-children-uganda.org.uk',
  'http://localhost:4321',
];

// Turnstile tokens must have been issued on one of these hostnames.
const ALLOWED_HOSTNAMES = ['reach-children-uganda.org.uk', 'www.reach-children-uganda.org.uk', 'localhost'];
const LIMITS = { name: 200, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cors(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Method not allowed' }, 405, origin);
    }
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return json({ ok: false, error: 'Forbidden' }, 403, origin);
    }
    if (!env.TURNSTILE_SECRET || !env.EMAIL) {
      return json({ ok: false, error: 'The contact form is not set up yet. Please email us directly.' }, 503, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: 'Bad request' }, 400, origin);
    }

    const str = (v) => (typeof v === 'string' ? v.trim() : '');
    const name = str(body.name);
    const email = str(body.email);
    const message = str(body.message);
    const token = str(body.token);
    const _gotcha = str(body._gotcha);

    // Honeypot: a real person never fills this. Silently accept so bots don't retry.
    if (_gotcha) return json({ ok: true }, 200, origin);

    if (!name || !email || !message) {
      return json({ ok: false, error: 'Please fill in your name, email and message.' }, 400, origin);
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
      return json({ ok: false, error: 'That message is too long. Please shorten it, or email us directly.' }, 400, origin);
    }
    if (!EMAIL_RE.test(email)) {
      return json({ ok: false, error: 'Please check your email address.' }, 400, origin);
    }
    if (!token || token.length > 2048) {
      return json({ ok: false, error: 'Please complete the anti-spam check.' }, 400, origin);
    }

    // 1) Verify the Turnstile token with Cloudflare
    let outcome;
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET,
          response: token,
          remoteip: request.headers.get('CF-Connecting-IP') || '',
        }),
      });
      outcome = await verifyRes.json();
    } catch {
      return json({ ok: false, error: 'Could not check the anti-spam test. Please try again.' }, 502, origin);
    }
    // Cloudflare's published test keys report the hostname "example.com"; real keys report the site's own.
    const hostOk = ALLOWED_HOSTNAMES.includes(outcome.hostname) || (env.TURNSTILE_SECRET.startsWith('1x0000') && outcome.hostname === 'example.com');
    if (!outcome.success || !hostOk) {
      return json({ ok: false, error: 'Anti-spam check failed — please try again.' }, 403, origin);
    }

    // 2) E-mail the (verified) message to the charity inbox.
    try {
      const msg = new EmailMessage(FROM, TO, buildMime({ name, email, message }));
      await env.EMAIL.send(msg);
    } catch (e) {
      console.error(JSON.stringify({ contact: 'send_failed', error: e && e.message }));
      return json({ ok: false, error: 'Could not send your message. Please email us directly.' }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};

/** A plain-text e-mail. Visitor text only ever goes in the (base64) body; the one
 *  header it touches, Reply-To, is an address already checked to have no spaces. */
function buildMime({ name, email, message }) {
  const b64 = (str) => {
    const bytes = new TextEncoder().encode(str);
    let bin = '';
    for (const b of bytes) bin += String.fromCharCode(b);
    return btoa(bin).replace(/.{76}/g, '$&\r\n');
  };
  const body = `New enquiry from the R.E.A.CH website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n—\nReply to this e-mail to answer ${name} directly.\n`;
  return [
    `From: "R.E.A.CH website" <${FROM}>`,
    `To: <${TO}>`,
    `Reply-To: <${email}>`,
    'Subject: New enquiry from the R.E.A.CH website',
    `Message-ID: <${crypto.randomUUID()}@reach-children-uganda.org.uk>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    b64(body),
  ].join('\r\n');
}
