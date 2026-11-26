# Fichiers vidéos à uploader sur Cloudflare R2

Ces fichiers sont dans `public/media/` (et `../content/media/` original). Upload ces 4 fichiers dans ton bucket R2 public :

- `2022/02/hyperion.mp4` (433 MB)
- `2022/02/VID_20220225_162537.mp4` (12 MB)
- `2022/02/IMG_0045.mp4` (10 MB)
- `2022/02/IMG_0046.mp4` (10 MB)

Une fois uploadés, change les URLs dans `src/lib/videos.ts` pour pointer vers ton bucket R2.
