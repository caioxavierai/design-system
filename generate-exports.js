/**
 * Sunter Wordmark — Export Generator
 * Gera PNG (fundo transparente) e JPG (fundo ideal) em alta resolução
 * para cada variante do wordmark.
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os   = require('os');

const DS      = __dirname;
const WM_DIR  = path.join(DS, 'wordmarks');
const OUT_DIR = path.join(DS, 'exports');
const CHROME  = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Fundo ideal de cada variante (para JPG)
const VARIANTS = [
  {
    file:    'wordmark-accent.svg',
    name:    'wordmark-accent',
    fill:    '#C96442',
    bg:      '#0A0908',   // canvas dark — uso principal
    label:   'Terracotta on Dark',
    lightBg: false,
  },
  {
    file:    'wordmark-white.svg',
    name:    'wordmark-white',
    fill:    '#F5F4ED',
    bg:      '#13120F',   // surface dark
    label:   'Parchment on Dark',
    lightBg: false,
  },
  {
    file:    'wordmark-dark.svg',
    name:    'wordmark-dark',
    fill:    '#1A1714',
    bg:      '#F5F0E8',   // canvas light
    label:   'Dark on Light',
    lightBg: true,
  },
  {
    file:    'wordmark-inverted.svg',
    name:    'wordmark-inverted',
    fill:    '#0A0908',
    bg:      '#C96442',   // terracotta
    label:   'Dark on Terracotta',
    lightBg: false,
  },
];

// Escala de exportação
// SVG nativo: ~317 × 76 px (vetores — sem perda em qualquer resolução)
// Alvo: 300 DPI para impressão profissional
// A4 largura = 210mm = 2480px a 300dpi
// Logo a 120mm de largura = 1417px → com padding generoso → escala 12x
const SCALE   = 12;         // 12× → ~3804px largura total (300 DPI ready)
const SVG_W   = 317;
const SVG_H   = 76;
const PADDING = 60;         // padding em cada lado (px no espaço original)

const OUT_W = Math.round((SVG_W + PADDING * 2) * SCALE);
const OUT_H = Math.round((SVG_H + PADDING * 2) * SCALE);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

// ─── Helpers ────────────────────────────────────────────────────────────────
function svgData(file) {
  const content = fs.readFileSync(path.join(WM_DIR, file), 'utf8');
  const d  = content.match(/d="([^"]+)"/)[1];
  const vb = content.match(/viewBox="([^"]+)"/)[1];
  return { d, viewBox: vb };
}

function buildJpgHtml(variant) {
  const { d, viewBox } = svgData(variant.file);
  const [,,vw,vh] = viewBox.split(' ').map(Number);
  const dispW = SVG_W * SCALE;
  const dispH = Math.round(dispW * vh / vw);
  const totalW = dispW + PADDING * 2 * SCALE;
  const totalH = dispH + PADDING * 2 * SCALE;
  const pad    = PADDING * SCALE;
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html, body { width:${totalW}px; height:${totalH}px; overflow:hidden; }
body {
  background:${variant.bg};
  display:flex; align-items:center; justify-content:center;
}
svg { display:block; }
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" width="${dispW}" height="${dispH}" viewBox="${viewBox}">
  <path fill="${variant.fill}" d="${d}"/>
</svg>
</body>
</html>`;
}

// ─── 1. PNG — fundo transparente via sips ────────────────────────────────────
// Cria SVG temporário com viewBox expandido pelo padding para preservar proporção
console.log('\n── PNG (transparente) ──────────────────────────────────────\n');

VARIANTS.forEach(v => {
  const { d, viewBox } = svgData(v.file);
  const [,, vw, vh] = viewBox.split(' ').map(Number);

  const newVW = vw + PADDING * 2;
  const newVH = vh + PADDING * 2;
  const targetW = Math.round(newVW * SCALE);
  const targetH = Math.round(newVH * SCALE);

  // SVG temporário com padding no viewBox (sem bg = transparente)
  const tmpSvg = path.join(os.tmpdir(), `sunter-wm-${v.name}.svg`);
  const wrappedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-PADDING} ${-PADDING} ${newVW} ${newVH}" role="img" aria-label="sunter">
  <path fill="${v.fill}" d="${d}"/>
</svg>`;
  fs.writeFileSync(tmpSvg, wrappedSvg, 'utf8');

  const outFile = path.join(OUT_DIR, `${v.name}@5x.png`);
  try {
    execSync(
      `sips -s format png --resampleWidth ${targetW} "${tmpSvg}" --out "${outFile}"`,
      { stdio: 'pipe' }
    );
    // Corrige DPI para 300 (print-ready)
    execSync(`sips -s dpiWidth 300 -s dpiHeight 300 "${outFile}"`, { stdio: 'pipe' });
    const actual = execSync(`sips -g pixelWidth -g pixelHeight "${outFile}"`, { encoding: 'utf8' });
    const w = actual.match(/pixelWidth: (\d+)/)?.[1];
    const h = actual.match(/pixelHeight: (\d+)/)?.[1];
    const kb = (fs.statSync(outFile).size / 1024).toFixed(0);
    console.log(`  ✓  ${v.name}.png   (${w}×${h}px · 300dpi · ${kb} KB)`);
  } catch (err) {
    console.error(`  ✗  ${v.name}: ${err.message}`);
  }
});

// ─── 2. JPG — fundo ideal via Chrome screenshot ───────────────────────────────
console.log('\n── JPG (fundo ideal) ───────────────────────────────────────\n');

VARIANTS.forEach(v => {
  const { viewBox } = svgData(v.file);
  const [,,vw,vh] = viewBox.split(' ').map(Number);
  const dispW  = SVG_W * SCALE;
  const dispH  = Math.round(dispW * vh / vw);
  const totalW = dispW + PADDING * 2 * SCALE;
  const totalH = dispH + PADDING * 2 * SCALE;

  // Escreve HTML temporário
  const tmpHtml = path.join(os.tmpdir(), `sunter-wm-${v.name}.html`);
  const tmpPng  = path.join(os.tmpdir(), `sunter-wm-${v.name}.png`);
  const outFile = path.join(OUT_DIR, `${v.name}-bg.jpg`);

  fs.writeFileSync(tmpHtml, buildJpgHtml(v), 'utf8');

  try {
    // Chrome screenshot → PNG (sem transparência, fundo sólido)
    execSync(`"${CHROME}" \
      --headless=new \
      --no-sandbox \
      --disable-gpu \
      --window-size=${totalW},${totalH} \
      --force-device-scale-factor=1 \
      --screenshot="${tmpPng}" \
      "file://${tmpHtml}"`,
      { stdio: 'pipe' }
    );

    // PNG → JPG (via sips, qualidade 95) + DPI 300
    execSync(
      `sips -s format jpeg -s formatOptions 95 -s dpiWidth 300 -s dpiHeight 300 "${tmpPng}" --out "${outFile}"`,
      { stdio: 'pipe' }
    );

    const actual = execSync(`sips -g pixelWidth -g pixelHeight "${outFile}"`, { encoding: 'utf8' });
    const w = actual.match(/pixelWidth: (\d+)/)?.[1];
    const h = actual.match(/pixelHeight: (\d+)/)?.[1];
    const kb = (fs.statSync(outFile).size / 1024).toFixed(0);
    console.log(`  ✓  ${v.name}-bg.jpg   (${w}×${h}px · 300dpi · ${kb} KB · bg ${v.bg})`);
  } catch (err) {
    console.error(`  ✗  ${v.name}: ${err.message}`);
  }
});

// ─── Resumo ───────────────────────────────────────────────────────────────────
console.log('\n─────────────────────────────────────────────────────────────');
console.log(`Exports em: ${OUT_DIR}`);
console.log('');
console.log('  @5x.png   → fundo transparente · uso digital e composição');
console.log('  -bg.jpg   → fundo ideal · redes sociais, email, apresentação');
console.log('');
