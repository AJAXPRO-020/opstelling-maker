#!/bin/sh

set -eu

project_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
publish_dir="$project_root/dist"

case "$publish_dir" in
  "$project_root/dist") ;;
  *) echo "Ongeldige publish-map" >&2; exit 1 ;;
esac

rm -rf "$publish_dir"
mkdir -p "$publish_dir/assets/players/meme" "$publish_dir/Favicon"

cp "$project_root/index.html" "$publish_dir/"
cp "$project_root/privacy.html" "$publish_dir/"
cp "$project_root/script.js" "$publish_dir/"
cp "$project_root/styles.css" "$publish_dir/"
cp "$project_root/robots.txt" "$publish_dir/"
cp "$project_root/sitemap.xml" "$publish_dir/"
cp "$project_root/assets/ajaxpro-logo-black.png" "$publish_dir/assets/"
cp "$project_root/assets/ajaxpro-opstelling-maker.webp" "$publish_dir/assets/"
cp "$project_root"/assets/players/*.webp "$publish_dir/assets/players/"
cp "$project_root"/assets/players/*.png "$publish_dir/assets/players/"
cp "$project_root"/assets/players/*.jpg "$publish_dir/assets/players/"
cp "$project_root"/assets/players/meme/*.webp "$publish_dir/assets/players/meme/"
cp "$project_root"/Favicon/* "$publish_dir/Favicon/"
