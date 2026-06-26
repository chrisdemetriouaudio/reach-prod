#!/usr/bin/env bash
#
# Download the images that are available on the Wayback Machine straight into
# public/images, using the clean filenames the site expects.
#
# Run from the astro-site directory:
#   bash scripts/fetch-archive-images.sh
#
set -uo pipefail

DEST="public/images"
mkdir -p "$DEST"

# target filename <TAB> Wayback image URL
MAP=$(cat <<'EOF'
bao-child.gif	https://web.archive.org/web/20260211120700im_/https://reach-children-uganda.org.uk/wp-content/uploads/2021/07/BAO-child.gif
orphan-support-project.jpg	https://web.archive.org/web/20240716030254im_/https://reach-children-uganda.org.uk/wp-content/uploads/2021/09/orphan_support_project.jpg
family-support-initiative.jpg	https://web.archive.org/web/20240716100854im_/https://reach-children-uganda.org.uk/wp-content/uploads/2021/09/family-support-initative.jpg
banner-home.png	https://web.archive.org/web/20220318072727im_/https://www.buryafricanoutreach.co.uk/wp-content/uploads/2020/12/headerimage.png
banner-inner.png	https://web.archive.org/web/20250315141613im_/https://reach-children-uganda.org.uk/wp-content/uploads/2021/07/cropped-image001-1.png
EOF
)

ok=0
fail=0

while IFS=$'\t' read -r target url; do
  [ -z "$target" ] && continue
  echo "  downloading $target ..."
  if curl -fsSL "$url" -o "$DEST/$target"; then
    echo "  ok   $target"
    ok=$((ok+1))
  else
    echo "  FAIL $target (will use placeholder)"
    rm -f "$DEST/$target"
    fail=$((fail+1))
  fi
done <<< "$MAP"

echo ""
echo "Done. Downloaded $ok image(s); $fail failed."
echo "The 4 trustee photos and St Gabriel's House are not on the archive —"
echo "they may be found locally by scripts/copy-images.sh, otherwise a placeholder is used."
