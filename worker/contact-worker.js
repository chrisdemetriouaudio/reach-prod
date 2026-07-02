/**
 * Cloudflare Worker — contact form gateway for reach-children-uganda.org.uk
 *
 * Flow: the website form POSTs here → this Worker verifies the Cloudflare
 * Turnstile token (server-side), checks the honeypot, then forwards the
 * message to Formspree. Bots that skip the widget or POST directly are rejected.
 *
 * Set these on the Worker (Settings → Variables):
 *   TURNSTILE_SECRET    (Secret)   – your Turnstile SECRET key
 *   FORMSPREE_ENDPOINT  (Variable) – e.g. https://formspree.io/f/abcdwxyz
 */

const ALLOWED_ORIGINS = [
  'https://reach-children-uganda.org.uk',
  'https://www.reach-children-uganda.org.uk',
  'http://localhost:4321',
];

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

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: 'Bad request' }, 400, origin);
    }

    const { name = '', email = '', message = '', token = '', _gotcha = '' } = body;

    // Honeypot: a real person never fills this. Silently accept so bots don't retry.
    if (_gotcha) return json({ ok: true }, 200, origin);

    if (!name || !email || !message) {
      return json({ ok: false, error: 'Please fill in your name, email and message.' }, 400, origin);
    }
    if (!token) {
      return json({ ok: false, error: 'Please complete the anti-spam check.' }, 400, origin);
    }

    // 1) Verify the Turnstile token with Cloudflare
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    });
    const outcome = await verifyRes.json();
    if (!outcome.success) {
      return json({ ok: false, error: 'Anti-spam check failed — please try again.' }, 403, origin);
    }

    // 2) Forward the (verified) message to Formspree
    const fwd = await fetch(env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: 'New enquiry from the R.E.A.CH website',
      }),
    });

    if (!fwd.ok) {
      return json({ ok: false, error: 'Could not send your message. Please email us directly.' }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
