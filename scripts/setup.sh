#!/usr/bin/env bash
#
# One-shot local setup: install dependencies, copy images out of the
# WordPress export, and build the static site.
#
# Run from the astro-site directory:
#   bash scripts/setup.sh
#
set -euo pipefail

echo "==> Installing dependencies"
npm install

echo "==> Copying images from the WordPress export"
bash scripts/copy-images.sh || true

echo "==> Building the site"
npm run build

echo ""
echo "Build complete. Preview it with:  npm run preview"
echo "Then deploy by pushing to GitHub (see README.md)."
