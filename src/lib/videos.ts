// Mapping des vidéos locales → URLs publiques (Cloudflare R2 ou YouTube)
export const VIDEO_MAP = {
  '2022/02/hyperion.mp4': 'https://www.youtube.com/watch?v=MMUp8Uuw6pI',
  '2022/02/VID_20220225_162537.mp4': 'https://r2.game-makers.xyz/media/2022/02/VID_20220225_162537.mp4',
  '2022/02/IMG_0045.mp4': 'https://r2.game-makers.xyz/media/2022/02/IMG_0045.mp4',
  '2022/02/IMG_0046.mp4': 'https://r2.game-makers.xyz/media/2022/02/IMG_0046.mp4',
} as const;

export const VIDEO_LIST = Object.keys(VIDEO_MAP);
