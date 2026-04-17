/**
 * Sunter Wordmark — Path Generator (v2)
 * Itera glifo a glifo com posicionamento manual para garantir
 * ordem LTR correta e letter-spacing preciso.
 */

const opentype = require('./node_modules/opentype.js');
const fs = require('fs');
const path = require('path');

const FONT_PATH = path.join(process.env.HOME, 'Downloads/Syne/static/Syne-SemiBold.ttf');
const OUT_DIR   = path.join(__dirname, 'wordmarks');
const TEXT      = 'sunter';
const FONT_SIZE = 100;
const BASELINE  = 80;
const PADDING   = 6;

// letter-spacing: -0.02em → em unidades → pixels
const LETTER_SPACING_PX = -0.02 * FONT_SIZE; // -2px

const VARIANTS = [
  { name: 'wordmark-accent',   fill: '#C96442', bg: null,      label: 'Terracotta — uso principal em fundos escuros' },
  { name: 'wordmark-white',    fill: '#F5F4ED', bg: null,      label: 'Parchment — monocromática em fundos escuros' },
  { name: 'wordmark-dark',     fill: '#1A1714', bg: null,      label: 'Near-black — light mode' },
  { name: 'wordmark-inverted', fill: '#0A0908', bg: '#C96442', label: 'Invertida — fundo terracotta' },
];

// ─── Render text glyph-by-glyph (LTR, positional manual) ────────────────────
function renderText(font, text, fontSize, baseline, letterSpacingPx) {
  const scale   = fontSize / font.unitsPerEm;
  const glyphs  = font.stringToGlyphs(text);
  let x = 0;
  const allCommands = [];

  for (let i = 0; i < glyphs.length; i++) {
    const glyph = glyphs[i];

    // Render this glyph at current x
    const glyphPath = glyph.getPath(x, baseline, fontSize);
    allCommands.push(...glyphPath.commands);

    // Advance: advance width in font units → pixels + letter-spacing
    const advance = (glyph.advanceWidth || 0) * scale;
    x += advance;

    // Apply letter-spacing between glyphs (not after last)
    if (i < glyphs.length - 1) {
      x += letterSpacingPx;
    }
  }

  const combined = new opentype.Path();
  combined.commands = allCommands;
  return combined;
}

// ─── Compute tight bounding box and re-render with offset ───────────────────
function buildAlignedPath(font, text, fontSize, letterSpacingPx, padding) {
  const baseline = fontSize; // initial baseline — will shift

  const raw = renderText(font, text, fontSize, baseline, letterSpacingPx);
  const bb  = raw.getBoundingBox();

  // Offsets to move content to (padding, padding) origin
  const ox = -bb.x1 + padding;
  const oy = -bb.y1 + padding;

  const final = renderText(font, text, fontSize, baseline + oy, letterSpacingPx);

  // Shift all x commands by ox
  final.commands = final.commands.map(cmd => {
    const c = { ...cmd };
    if (c.x  !== undefined) c.x  += ox;
    if (c.x1 !== undefined) c.x1 += ox;
    if (c.x2 !== undefined) c.x2 += ox;
    if (c.y  !== undefined) { /* already handled by oy above */ }
    return c;
  });

  const vw = (bb.x2 - bb.x1) + padding * 2;
  const vh = (bb.y2 - bb.y1) + padding * 2;

  return { path: final, vw, vh };
}

// ─── SVG builder ─────────────────────────────────────────────────────────────
function buildSVG({ pathD, vw, vh, fill, bg, label }) {
  const bgRect = bg
    ? `\n  <rect width="${vw.toFixed(2)}" height="${vh.toFixed(2)}" fill="${bg}"/>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw.toFixed(2)} ${vh.toFixed(2)}" role="img" aria-label="sunter">
  <!--
    Sunter Wordmark — ${label}
    Font    : Syne SemiBold (weight 600)
    Case    : lowercase
    Tracking: -0.02em
    Note    : paths — não requer font instalada
  -->${bgRect}
  <path fill="${fill}" d="${pathD}"/>
</svg>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
try {
  console.log('Carregando:', FONT_PATH);
  const font = opentype.loadSync(FONT_PATH);
  console.log('unitsPerEm:', font.unitsPerEm);

  const { path: finalPath, vw, vh } = buildAlignedPath(
    font, TEXT, FONT_SIZE, LETTER_SPACING_PX, PADDING
  );

  const pathD = finalPath.toPathData(3);

  // Create output dir
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

  // Generate each variant
  VARIANTS.forEach(({ name, fill, bg, label }) => {
    const svg = buildSVG({ pathD, vw, vh, fill, bg, label });
    const outPath = path.join(OUT_DIR, `${name}.svg`);
    fs.writeFileSync(outPath, svg, 'utf8');
    console.log(`✓  ${name}.svg  (${vw.toFixed(0)} × ${vh.toFixed(0)} px)`);
  });

  // Preview HTML
  const preview = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Sunter — Wordmark Preview</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#0A0908; }
.grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; }
.cell { padding:56px 48px; display:flex; flex-direction:column; gap:24px; }
.c1 { background:#0A0908; }
.c2 { background:#13120F; }
.c3 { background:#F5F0E8; }
.c4 { background:#C96442; }
.label { font-family:system-ui,sans-serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; }
.c1 .label,.c2 .label { color:#5E5D59; }
.c3 .label { color:#9A948C; }
.c4 .label { color:rgba(10,9,8,0.4); }
img { width:100%; max-width:400px; height:auto; display:block; }
</style>
</head>
<body>
<div class="grid">
  <div class="cell c1">
    <div class="label">Primária — terracotta on dark</div>
    <img src="wordmark-accent.svg" alt="sunter">
  </div>
  <div class="cell c2">
    <div class="label">Monocromática — white on dark</div>
    <img src="wordmark-white.svg" alt="sunter">
  </div>
  <div class="cell c3">
    <div class="label">Light mode — dark on cream</div>
    <img src="wordmark-dark.svg" alt="sunter">
  </div>
  <div class="cell c4">
    <div class="label">Invertida — dark on accent</div>
    <img src="wordmark-inverted.svg" alt="sunter">
  </div>
</div>
</body>
</html>`;

  fs.writeFileSync(path.join(OUT_DIR, 'preview.html'), preview, 'utf8');
  console.log('✓  preview.html');
  console.log('\nArquivos em:', OUT_DIR);

} catch (err) {
  console.error('Erro:', err.message);
  process.exit(1);
}
