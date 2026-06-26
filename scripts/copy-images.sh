#!/usr/bin/env bash
#
# Copy the website images into public/images with the clean filenames the site
# expects. RUN THIS ON YOUR MAC (not from any sandbox) so the copied files are
# owned by you and your browser/preview can read them.
#
# From the astro-site directory:
#   bash scripts/copy-images.sh
#
set -uo pipefail

# Where your WordPress photos live (you populated this folder):
SRC="../wordpress-backup/reach-children-uganda.org.uk/wp-content/uploads"
DEST="public/images"
mkdir -p "$DEST"

if [ ! -d "$SRC" ]; then
  echo "!! Couldn't find $SRC"
  echo "   Pass the uploads folder path, e.g.: bash scripts/copy-images.sh /path/to/uploads"
  [ "${1:-}" ] && SRC="$1"
fi
[ "${1:-}" ] && SRC="$1"

# target name <TAB> original filename to find under the uploads tree
MAP=$(cat <<'EOF'
bao-child.gif	BAO-child.gif
orphan-support-project.jpg	orphan_support_project.jpg
st-gabriels-house.jpg	st_gabriels_house.jpg
family-support-initiative.jpg	family-support-initative.jpg
trustee-lydia.png	lydiaturner-2022.png
trustee-phil.png	team-phil.png
trustee-tom.png	team-tom.png
trustee-denise.png	team-denise.png
banner-home.png	headerimage.png
banner-inner.png	cropped-image001-1.png
EOF
)

ok=0; miss=0
while IFS=$'\t' read -r target source; do
  [ -z "$target" ] && continue
  match=$(find "$SRC" -type f -name "$source" 2>/dev/null | head -n 1)
  if [ -n "$match" ]; then
    rm -f "$DEST/$target"
    cp "$match" "$DEST/$target"
    echo "  ok   $target"
    ok=$((ok+1))
  else
    echo "  MISS $target  (no '$source' found — placeholder will be used)"
    miss=$((miss+1))
  fi
done <<< "$MAP"

# The logo is referenced directly from public/images/cropped-thumbnail_Reach-Logo-Final-transparent-no-text.png
# (no copy needed). Make sure that file is present and readable in public/images.

echo ""
echo "Done. $ok copied, $miss missing."
echo "Now restart the dev server (Ctrl+C, then: npm run dev) and hard-refresh the browser."