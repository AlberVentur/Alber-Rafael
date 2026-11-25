#!/usr/bin/env python3
"""prep_prints.py <in_image> <out.jpg> [--long 1500] [--color] : archival-print treatment.
Default: warm monochrome (unifies mixed sources), autocontrast, LANCZOS upscale, gentle unsharp. --color keeps colour (colorized photos) but warms it.
Prints the aspect ratio (w/h) to use in WPrint."""
import argparse, numpy as np
from PIL import Image, ImageOps, ImageFilter, ImageEnhance
ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('dst'); ap.add_argument('--long', type=int, default=1500); ap.add_argument('--color', action='store_true')
a = ap.parse_args(); im = Image.open(a.src); im = ImageOps.exif_transpose(im)
im = im.convert('RGB') if a.color else im.convert('L'); im = ImageOps.autocontrast(im, cutoff=1)
s = a.long / max(im.size); im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=2, percent=70, threshold=2))
if a.color:
    arr = np.asarray(ImageEnhance.Color(im).enhance(0.75), np.float32); arr = arr * np.array([1.04, 1.0, 0.9]); out = Image.fromarray(arr.clip(0, 255).astype(np.uint8))
else:
    v = np.asarray(im, np.float32)[..., None] / 255; out = Image.fromarray((np.array((24, 19, 14)) * (1 - v) + np.array((238, 228, 208)) * v).clip(0, 255).astype(np.uint8))
out.save(a.dst, quality=92); print(f'{a.dst} {out.width}x{out.height} aspect={out.width / out.height:.4f}' + ('  WARNING: source < 800px, will look soft' if max(Image.open(a.src).size) < 800 else ''))
