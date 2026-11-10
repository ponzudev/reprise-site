# iPhone の枠（モック）にスクリーンショットをはめ込んで WebP にする。
# 使い方: python3 scripts/frame.py 枠.png 画面.png 出力.webp [出力の幅（既定 720）]
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

frame_path, shot_path, out_path = sys.argv[1:4]
OUT_WIDTH = int(sys.argv[4]) if len(sys.argv) > 4 else 720

frame = Image.open(frame_path).convert('RGBA')
a = np.asarray(frame).astype(np.float32)
h, w = a.shape[:2]
lum = a[..., :3].mean(axis=2)
white = (lum > 245) & (a[..., 3] > 250)
# 中央からつながっている白い部分が画面
fill = Image.fromarray((white * 255).astype(np.uint8)).copy()
ImageDraw.floodfill(fill, (w // 2, h // 2), 128)
screen = np.asarray(fill) == 128
# 行ごとに左端から右端までを画面とみなす（時刻やダイナミックアイランドの穴を埋める）
hull = np.zeros_like(screen)
rows = np.where(screen.any(axis=1))[0]
for y in rows:
    xs = np.where(screen[y])[0]
    hull[y, xs[0]:xs[-1] + 1] = True
top, bottom = rows[0], rows[-1]
cols = np.where(hull.any(axis=0))[0]
left, right = cols[0], cols[-1]

# ダイナミックアイランド: 画面上部の中央にある黒いかたまり
island_alpha = np.zeros((h, w), np.float32)
box = (slice(top, top + int(h * 0.075)), slice(int(w * 0.34), int(w * 0.66)))
island_alpha[box] = np.clip((200 - lum[box]) / 150, 0, 1)
island_alpha *= hull

shot = Image.open(shot_path).convert('RGB').resize((right - left + 1, bottom - top + 1), Image.LANCZOS)
s = np.zeros((h, w, 3), np.float32)
s[top:bottom + 1, left:right + 1] = np.asarray(shot)

# 画面の縁はなめらかに（枠との境目のぎざぎざを消す）
soft = np.asarray(Image.fromarray((hull * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32) / 255
m = soft[..., None]
rgb = a[..., :3] * (1 - m) + s * m
ia = island_alpha[..., None]
rgb = rgb * (1 - ia) + a[..., :3] * ia
out = np.dstack([rgb, a[..., 3]]).clip(0, 255).astype(np.uint8)
img = Image.fromarray(out, 'RGBA').resize((OUT_WIDTH, round(h * OUT_WIDTH / w)), Image.LANCZOS)
img.save(out_path, 'WEBP', quality=90, method=6)
print(out_path, img.size, 'screen', (left, top, right, bottom))
