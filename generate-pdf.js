/**
 * Sunter Brand Guide — PDF Generator
 * Gera um HTML self-contained (fontes + SVGs embedados) e converte
 * para PDF via Chrome headless.
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DS   = __dirname;
const FONTS = path.join(process.env.HOME, 'Library/Fonts');

// ─── 1. Ler fontes como base64 ───────────────────────────────────────────────
function fontB64(file) {
  return fs.readFileSync(path.join(FONTS, file)).toString('base64');
}

const b64 = {
  syneB:       fontB64('Syne-SemiBold.ttf'),
  manropeL:    fontB64('Manrope-Light.ttf'),
  manropeR:    fontB64('Manrope-Regular.ttf'),
  manropeM:    fontB64('Manrope-Medium.ttf'),
};

// ─── 2. Ler paths SVG dos wordmarks ─────────────────────────────────────────
function svgPath(file) {
  const content = fs.readFileSync(path.join(DS, 'wordmarks', file), 'utf8');
  const match   = content.match(/d="([^"]+)"/);
  const vb      = content.match(/viewBox="([^"]+)"/);
  return { d: match ? match[1] : '', viewBox: vb ? vb[1] : '0 0 317 76' };
}

const wm = {
  accent:   svgPath('wordmark-accent.svg'),
  white:    svgPath('wordmark-white.svg'),
  dark:     svgPath('wordmark-dark.svg'),
  inverted: svgPath('wordmark-inverted.svg'),
};

function inlineSVG(variant, fill, width = 260) {
  const { d, viewBox } = wm[variant];
  const [,, vw, vh] = viewBox.split(' ').map(Number);
  const height = Math.round(width * vh / vw);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}" role="img" aria-label="sunter"><path fill="${fill}" d="${d}"/></svg>`;
}

// ─── 3. HTML self-contained ───────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Sunter — Brand Guide</title>
<style>

/* ── Fontes embeddadas ───────────────────────────────────────────── */
@font-face { font-family:'Syne'; font-weight:600; src:url('data:font/ttf;base64,${b64.syneB}') format('truetype'); }
@font-face { font-family:'Manrope'; font-weight:300; src:url('data:font/ttf;base64,${b64.manropeL}') format('truetype'); }
@font-face { font-family:'Manrope'; font-weight:400; src:url('data:font/ttf;base64,${b64.manropeR}') format('truetype'); }
@font-face { font-family:'Manrope'; font-weight:500; src:url('data:font/ttf;base64,${b64.manropeM}') format('truetype'); }

/* ── Print ───────────────────────────────────────────────────────── */
@page { size: A4; margin: 0; }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; margin:0; padding:0; }

/* ── Tokens ──────────────────────────────────────────────────────── */
:root {
  --bg-0:#0A0908; --bg-1:#13120F; --bg-2:#1C1A16; --bg-3:#26231E;
  --tx-1:#F5F4ED; --tx-2:#B0AEA5; --tx-3:#87867F; --tx-4:#5E5D59;
  --acc:#C96442; --lt:#F5F0E8; --lt-tx:#1A1714;
}

/* ── Base ────────────────────────────────────────────────────────── */
body { font-family:'Manrope',sans-serif; font-weight:400; background:var(--bg-0); color:var(--tx-1); font-size:11pt; line-height:1.6; }

/* ── Páginas ─────────────────────────────────────────────────────── */
.page { width:210mm; min-height:297mm; padding:16mm 18mm; page-break-after:always; position:relative; overflow:hidden; }
.page:last-child { page-break-after:auto; }
.page-dark  { background:var(--bg-0); }
.page-dark2 { background:var(--bg-1); }
.page-light { background:var(--lt); color:var(--lt-tx); }

/* ── Rodapé de página ─────────────────────────────────────────────── */
.page-footer {
  position:absolute; bottom:10mm; left:18mm; right:18mm;
  display:flex; justify-content:space-between; align-items:center;
  border-top:1px solid var(--bg-2); padding-top:5mm;
}
.pf-brand { font-family:'Syne',sans-serif; font-weight:600; font-size:9pt; letter-spacing:-0.02em; color:var(--acc); }
.pf-info  { font-size:7.5pt; color:var(--tx-4); text-align:right; line-height:1.5; }

/* ── Eyebrow / tags ──────────────────────────────────────────────── */
.eyebrow { font-size:7.5pt; letter-spacing:0.22em; text-transform:uppercase; color:var(--tx-4); font-weight:500; margin-bottom:5mm; }
.eyebrow-lt { color:#9A948C; }

/* ── Títulos de seção ────────────────────────────────────────────── */
.sec-title { font-size:22pt; font-weight:300; letter-spacing:-0.01em; margin-bottom:8mm; color:var(--tx-1); }

/* ── Wordmark display ────────────────────────────────────────────── */
.wm-display { font-family:'Syne',sans-serif; font-weight:600; letter-spacing:-0.02em; }

/* ── Spec items ──────────────────────────────────────────────────── */
.spec-row { display:flex; gap:10mm; flex-wrap:wrap; margin-bottom:10mm; }
.spec-item {}
.spec-label { font-size:7.5pt; letter-spacing:0.18em; text-transform:uppercase; color:var(--tx-4); margin-bottom:1.5mm; }
.spec-value { font-size:10pt; color:var(--tx-2); }
.spec-value code { font-family:'Courier New',monospace; color:var(--tx-1); background:var(--bg-2); padding:1px 4px; border-radius:2px; font-size:9pt; }

/* ── Grid ─────────────────────────────────────────────────────────── */
.grid2 { display:grid; grid-template-columns:1fr 1fr; gap:3mm; }
.grid4 { display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:2mm; }
.grid5 { display:grid; grid-template-columns:repeat(5,1fr); gap:2mm; }

/* ── Variant cells ───────────────────────────────────────────────── */
.vc { padding:7mm 6mm; border-radius:2px; }
.vc-label { font-size:7pt; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:3mm; }
.vc-sub   { font-size:8pt; margin-top:3mm; line-height:1.7; }
.vc-sub span { opacity:0.6; }
.badge-primary { display:inline-block; font-size:6.5pt; letter-spacing:0.12em; text-transform:uppercase; padding:1.5px 5px; border-radius:2px; background:var(--acc); color:#0A0908; margin-bottom:3mm; }

/* ── Background cells ─────────────────────────────────────────────── */
.bgc { padding:5mm 4mm; border-radius:2px; }
.bgc-label { font-size:7pt; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:1.5mm; }
.bgc-hex   { font-size:8pt; font-family:'Courier New',monospace; margin-bottom:1.5mm; }
.bgc-ok    { font-size:7pt; color:#5ECF8A; }
.bgc-warn  { font-size:7pt; color:#D4914A; }

/* ── Don'ts ───────────────────────────────────────────────────────── */
.dont { background:var(--bg-2); padding:5mm 4mm; border-radius:2px; }
.dont-preview { height:18mm; display:flex; align-items:center; justify-content:center; margin-bottom:3mm; }
.dont-rule { font-size:7.5pt; color:var(--tx-3); line-height:1.5; border-top:1px solid var(--bg-3); padding-top:2.5mm; }
.dont-rule strong { display:block; font-size:7pt; letter-spacing:0.1em; text-transform:uppercase; color:#E06060; margin-bottom:1mm; font-weight:500; }

/* ── Tipografia / tabela ─────────────────────────────────────────── */
.type-box { background:var(--bg-1); border-radius:3px; overflow:hidden; margin-bottom:6mm; }
.type-row { display:grid; grid-template-columns:42mm 1fr; border-bottom:1px solid var(--bg-2); }
.type-row:last-child { border-bottom:none; }
.type-meta { padding:4mm 5mm; border-right:1px solid var(--bg-2); }
.type-meta-label { font-size:7pt; letter-spacing:0.15em; text-transform:uppercase; color:var(--tx-4); margin-bottom:1.5mm; }
.type-meta-value { font-size:8.5pt; color:var(--tx-2); line-height:1.6; }
.type-meta-value code { font-family:'Courier New',monospace; color:var(--tx-1); }
.type-preview { padding:4mm 5mm; display:flex; align-items:center; }

table { width:100%; border-collapse:collapse; font-size:8.5pt; }
th { text-align:left; font-size:7pt; letter-spacing:0.15em; text-transform:uppercase; color:var(--tx-4); padding:2.5mm 3mm; background:var(--bg-2); font-weight:500; }
td { padding:2.5mm 3mm; border-bottom:1px solid var(--bg-2); color:var(--tx-2); }
td:first-child { color:var(--tx-1); }
td code { font-family:'Courier New',monospace; color:var(--tx-1); background:var(--bg-2); padding:1px 4px; border-radius:2px; font-size:7.5pt; }
tr:last-child td { border-bottom:none; }

.note { font-size:8.5pt; color:var(--tx-4); line-height:1.7; margin-top:5mm; padding-left:4mm; border-left:2px solid var(--bg-3); }
.note strong { color:var(--tx-3); font-weight:500; }

/* ── Separador ──────────────────────────────────────────────────── */
.divider { border:none; border-top:1px solid var(--bg-2); margin:7mm 0; }

/* ── Clear space diagram ────────────────────────────────────────── */
.cs-demo { background:var(--bg-1); border-radius:4px; padding:12mm; display:flex; align-items:center; justify-content:center; }
.cs-inner { position:relative; padding:8mm; border:1px dashed rgba(201,100,66,0.35); display:inline-flex; }
.cs-unit-label { position:absolute; font-size:7pt; color:var(--acc); letter-spacing:0.08em; }
.cs-unit-top    { top:-5mm; left:50%; transform:translateX(-50%); white-space:nowrap; }
.cs-unit-left   { left:-13mm; top:50%; transform:translateY(-50%) rotate(-90deg); white-space:nowrap; }

</style>
</head>
<body>

<!-- ══════════════════════════════════════════════════════════════════
     PÁGINA 1 — HERO + FILOSOFIA
     ══════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <div class="eyebrow" style="margin-bottom:16mm;">Sunter Tecnologia · Brand Guide · 2026</div>

  <!-- Wordmark hero -->
  <div style="margin-bottom:10mm;">
    ${inlineSVG('accent', '#C96442', 380)}
  </div>

  <!-- Spec strip -->
  <div class="spec-row" style="margin-bottom:14mm;">
    <div class="spec-item">
      <div class="spec-label">Tipografia</div>
      <div class="spec-value">Syne · <code>weight 600</code></div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Caixa</div>
      <div class="spec-value">lowercase obrigatório</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Letter-spacing</div>
      <div class="spec-value"><code>-0.02em</code></div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Símbolo</div>
      <div class="spec-value">nenhum — wordmark exclusivo</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Accent</div>
      <div class="spec-value"><code>#C96442</code> terracotta</div>
    </div>
  </div>

  <hr class="divider">

  <!-- Filosofia -->
  <div class="eyebrow" style="margin-bottom:3mm;">01 · Filosofia</div>
  <div class="sec-title">A marca Sunter é o wordmark.</div>
  <p style="font-size:11pt; color:var(--tx-2); max-width:148mm; line-height:1.9; font-weight:300;">
    Nenhum símbolo, ícone ou elemento decorativo complementa a identidade —
    a força está na tipografia e na cor. O nome <span style="font-family:'Syne',sans-serif; font-weight:600; letter-spacing:-0.02em; color:var(--acc);">sunter</span> em lowercase
    com tracking fechado não é uma escolha casual: é uma afirmação de
    <em>confiança sem arrogância</em>.
    <br><br>
    Marcas que precisam de um símbolo para ser reconhecidas ainda estão
    construindo sua identidade. A Sunter já sabe quem é.
  </p>

  <div class="page-footer">
    <div class="pf-brand">sunter</div>
    <div class="pf-info">Brand Guide v1.0 · Warm Intelligence v3.0 · pág. 1</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════════
     PÁGINA 2 — VARIAÇÕES DE COR
     ══════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <div class="eyebrow" style="margin-bottom:3mm;">02 · Variações de Cor</div>
  <div class="sec-title">Quatro aplicações aprovadas.</div>

  <div class="grid2" style="margin-bottom:4mm;">
    <!-- Primária -->
    <div class="vc" style="background:#0A0908; border:1px solid #1C1A16;">
      <div class="vc-label" style="color:var(--tx-4);">Primária</div>
      <div class="badge-primary">uso principal</div><br>
      ${inlineSVG('accent', '#C96442', 200)}
      <div class="vc-sub" style="color:var(--tx-4);">
        <span>texto</span> #C96442 &nbsp;·&nbsp; <span>fundo</span> #0A0908–#13120F
      </div>
    </div>
    <!-- Monocromática -->
    <div class="vc" style="background:#13120F;">
      <div class="vc-label" style="color:var(--tx-4);">Monocromática</div>
      <div style="height:5mm;"></div>
      ${inlineSVG('white', '#F5F4ED', 200)}
      <div class="vc-sub" style="color:var(--tx-4);">
        <span>texto</span> #F5F4ED &nbsp;·&nbsp; <span>uso</span> quando accent não é possível
      </div>
    </div>
  </div>

  <div class="grid2" style="margin-bottom:6mm;">
    <!-- Light mode -->
    <div class="vc" style="background:#F5F0E8;">
      <div class="vc-label" style="color:#9A948C;">Light Mode</div>
      <div style="height:5mm;"></div>
      ${inlineSVG('dark', '#1A1714', 200)}
      <div class="vc-sub" style="color:#9A948C;">
        <span>texto</span> #1A1714 &nbsp;·&nbsp; <span>fundo</span> #F5F0E8–#FFFFFF
      </div>
    </div>
    <!-- Invertida -->
    <div class="vc" style="background:#C96442;">
      <div class="vc-label" style="color:rgba(10,9,8,0.45);">Invertida</div>
      <div style="height:5mm;"></div>
      ${inlineSVG('inverted', '#0A0908', 200)}
      <div class="vc-sub" style="color:rgba(10,9,8,0.45);">
        <span>texto</span> #0A0908 &nbsp;·&nbsp; <span>uso</span> fundos terracotta
      </div>
    </div>
  </div>

  <div class="note">
    <strong>Regra:</strong> Nunca aplique a versão primária (terracotta) em fundos claros — o contraste é insuficiente. Use sempre a versão light mode nesses contextos.
  </div>

  <div class="page-footer">
    <div class="pf-brand">sunter</div>
    <div class="pf-info">Brand Guide v1.0 · Warm Intelligence v3.0 · pág. 2</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════════
     PÁGINA 3 — ESPAÇO DE RESPIRO + TAMANHO MÍNIMO
     ══════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <div class="eyebrow" style="margin-bottom:3mm;">03 · Espaço de Respiro</div>
  <div class="sec-title">Unidade x = x-height da marca.</div>

  <p style="font-size:9.5pt; color:var(--tx-3); max-width:140mm; line-height:1.7; margin-bottom:7mm;">
    Nenhum outro elemento visual pode entrar na área de respiro de <strong style="color:var(--tx-2);">1x</strong> em todos os lados.
    Prático: em 24px font-size → ~17px de respiro mínimo em cada lado.
  </p>

  <div class="cs-demo" style="margin-bottom:10mm;">
    <div class="cs-inner">
      <div class="cs-unit-label cs-unit-top">↕ x</div>
      <div class="cs-unit-label cs-unit-left">↕ x</div>
      ${inlineSVG('accent', '#C96442', 200)}
    </div>
  </div>

  <hr class="divider">

  <div class="eyebrow" style="margin-bottom:3mm;">04 · Tamanho Mínimo</div>
  <div class="sec-title">Digital e print.</div>

  <div style="display:flex; gap:10mm; align-items:flex-end; margin-bottom:8mm; flex-wrap:wrap;">
    <div>
      <div class="spec-label" style="margin-bottom:2mm;">Mínimo digital</div>
      ${inlineSVG('accent', '#C96442', 120)}
      <div style="font-size:7.5pt; color:#5ECF8A; margin-top:2mm;">✓ 18px / ~72px largura</div>
    </div>
    <div>
      <div class="spec-label" style="margin-bottom:2mm;">Recomendado digital</div>
      ${inlineSVG('accent', '#C96442', 160)}
      <div style="font-size:7.5pt; color:#5ECF8A; margin-top:2mm;">✓ 24px / ~96px largura</div>
    </div>
    <div>
      <div class="spec-label" style="margin-bottom:2mm;">Muito pequeno</div>
      ${inlineSVG('accent', '#C96442', 80)}
      <div style="font-size:7.5pt; color:#E06060; margin-top:2mm;">✗ 12px — não usar</div>
    </div>
    <div style="background:var(--bg-1); border-radius:4px; padding:4mm 5mm;">
      <div class="spec-label" style="margin-bottom:3mm;">Print</div>
      <div style="font-size:9pt; color:var(--tx-2); line-height:1.9;">
        Mínimo: <strong style="color:var(--tx-1);">20mm</strong><br>
        Recomendado: 30mm+<br>
        Resolução: 300dpi<br>
        Formato: SVG ou PDF
      </div>
    </div>
  </div>

  <div class="page-footer">
    <div class="pf-brand">sunter</div>
    <div class="pf-info">Brand Guide v1.0 · Warm Intelligence v3.0 · pág. 3</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════════
     PÁGINA 4 — FUNDOS APROVADOS + O QUE NÃO FAZER
     ══════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <div class="eyebrow" style="margin-bottom:3mm;">05 · Fundos Aprovados</div>
  <div class="sec-title">Cinco contextos validados.</div>

  <div class="grid5" style="margin-bottom:8mm;">
    <div class="bgc" style="background:#0A0908; border:1px solid #1C1A16;">
      ${inlineSVG('accent','#C96442',90)}
      <div class="bgc-label" style="color:var(--tx-4);">Canvas dark</div>
      <div class="bgc-hex" style="color:var(--tx-4);">#0A0908</div>
      <div class="bgc-ok">✓ Primário</div>
    </div>
    <div class="bgc" style="background:#13120F; border:1px solid #1C1A16;">
      ${inlineSVG('accent','#C96442',90)}
      <div class="bgc-label" style="color:var(--tx-4);">Surface dark</div>
      <div class="bgc-hex" style="color:var(--tx-4);">#13120F</div>
      <div class="bgc-ok">✓ Aprovado</div>
    </div>
    <div class="bgc" style="background:#F5F0E8;">
      ${inlineSVG('dark','#1A1714',90)}
      <div class="bgc-label" style="color:#9A948C;">Canvas light</div>
      <div class="bgc-hex" style="color:#9A948C;">#F5F0E8</div>
      <div class="bgc-ok" style="color:#2E8A55;">✓ Aprovado</div>
    </div>
    <div class="bgc" style="background:#FFFFFF;">
      ${inlineSVG('dark','#1A1714',90)}
      <div class="bgc-label" style="color:#9A948C;">White</div>
      <div class="bgc-hex" style="color:#9A948C;">#FFFFFF</div>
      <div class="bgc-warn">⚠ Evitar</div>
    </div>
    <div class="bgc" style="background:#C96442;">
      ${inlineSVG('inverted','#0A0908',90)}
      <div class="bgc-label" style="color:rgba(10,9,8,0.4);">Accent</div>
      <div class="bgc-hex" style="color:rgba(10,9,8,0.4);">#C96442</div>
      <div class="bgc-ok" style="color:rgba(10,9,8,0.5);">✓ Invertida</div>
    </div>
  </div>

  <hr class="divider">

  <div class="eyebrow" style="margin-bottom:3mm;">06 · O que não fazer</div>
  <div class="sec-title">Oito proibições.</div>

  <div class="grid4">
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:var(--acc);display:inline-block;transform:scaleX(1.35);">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Esticar</strong>Nunca distorça as proporções. Use o arquivo original.</div>
    </div>
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:var(--acc);display:inline-block;transform:scaleY(0.55);">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Comprimir</strong>Qualquer alteração vertical destrói a geometria da Syne.</div>
    </div>
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:#4A90D9;">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Cor errada</strong>Somente as 4 variações aprovadas na seção 02.</div>
    </div>
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:0.08em;font-size:14pt;color:var(--acc);text-transform:uppercase;">SUNTER</span>
      </div>
      <div class="dont-rule"><strong>❌ Uppercase</strong>Sempre lowercase, sempre -0.02em. Sem exceções.</div>
    </div>
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:var(--acc);text-shadow:0 2px 10px rgba(201,100,66,0.9);">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Efeitos</strong>Sem sombra, glow, outline ou gradiente no texto.</div>
    </div>
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Manrope',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:var(--acc);">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Fonte errada</strong>Wordmark exclusivamente em Syne 600. Nunca Manrope.</div>
    </div>
    <div class="dont">
      <div class="dont-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:var(--acc);display:inline-block;transform:rotate(-14deg);">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Rotacionar</strong>O wordmark é sempre horizontal. Nenhum ângulo.</div>
    </div>
    <div class="dont">
      <div class="dont-preview" style="background:#1A3A5C;border-radius:3px;margin:-3mm;width:calc(100% + 6mm);">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:16pt;color:var(--acc);">sunter</span>
      </div>
      <div class="dont-rule"><strong>❌ Fundo errado</strong>Fundos fora da paleta Sunter são proibidos.</div>
    </div>
  </div>

  <div class="page-footer">
    <div class="pf-brand">sunter</div>
    <div class="pf-info">Brand Guide v1.0 · Warm Intelligence v3.0 · pág. 4</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════════════════════
     PÁGINA 5 — TIPOGRAFIA + ARQUIVOS
     ══════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <div class="eyebrow" style="margin-bottom:3mm;">07 · Tipografia do Sistema</div>
  <div class="sec-title">Três famílias, papéis distintos.</div>

  <div class="type-box" style="margin-bottom:8mm;">
    <div class="type-row">
      <div class="type-meta">
        <div class="type-meta-label">Wordmark</div>
        <div class="type-meta-value"><code>Syne 600</code><br>letter-spacing <code>-0.02em</code><br>uso: logotipo exclusivamente</div>
      </div>
      <div class="type-preview">
        <span style="font-family:'Syne',sans-serif;font-weight:600;letter-spacing:-0.02em;font-size:22pt;color:var(--acc);">sunter</span>
      </div>
    </div>
    <div class="type-row">
      <div class="type-meta">
        <div class="type-meta-label">Interface / UI</div>
        <div class="type-meta-value"><code>Manrope 300–500</code><br>tracking natural<br>uso: todo o restante</div>
      </div>
      <div class="type-preview">
        <span style="font-family:'Manrope',sans-serif;font-weight:300;font-size:16pt;color:var(--tx-1);letter-spacing:-0.01em;">Inteligência que resolve.</span>
      </div>
    </div>
    <div class="type-row">
      <div class="type-meta">
        <div class="type-meta-label">Código / Técnico</div>
        <div class="type-meta-value"><code>Fragment Mono 400</code><br>uso: snippets, dados</div>
      </div>
      <div class="type-preview">
        <span style="font-family:'Courier New',monospace;font-size:11pt;color:var(--tx-2);">npm install @sunter/ds</span>
      </div>
    </div>
  </div>

  <hr class="divider">

  <div class="eyebrow" style="margin-bottom:3mm;">08 · Arquivos de Marca</div>
  <div class="sec-title" style="font-size:18pt;">Entregáveis e formatos.</div>

  <table>
    <thead>
      <tr>
        <th>Arquivo</th>
        <th>Uso</th>
        <th>Formato</th>
        <th>Observação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>wordmarks/wordmark-accent.svg</code></td>
        <td>Uso principal digital</td>
        <td>SVG paths</td>
        <td>Não requer font</td>
      </tr>
      <tr>
        <td><code>wordmarks/wordmark-white.svg</code></td>
        <td>Monocromática</td>
        <td>SVG paths</td>
        <td>Não requer font</td>
      </tr>
      <tr>
        <td><code>wordmarks/wordmark-dark.svg</code></td>
        <td>Light mode</td>
        <td>SVG paths</td>
        <td>Não requer font</td>
      </tr>
      <tr>
        <td><code>wordmarks/wordmark-inverted.svg</code></td>
        <td>Fundo terracotta</td>
        <td>SVG paths</td>
        <td>Com background</td>
      </tr>
      <tr>
        <td><code>sunter-design-system.md</code></td>
        <td>Documentação técnica</td>
        <td>Markdown</td>
        <td>Fonte da verdade</td>
      </tr>
      <tr>
        <td><code>brand-guide.pdf</code></td>
        <td>Apresentação e impressão</td>
        <td>PDF</td>
        <td>Este arquivo</td>
      </tr>
    </tbody>
  </table>

  <div class="note" style="margin-top:6mm;">
    <strong>Para regenerar wordmarks:</strong> instale opentype.js via <code>npm install</code> na pasta design-system e execute <code>node generate-wordmark.js</code>.
  </div>

  <div class="page-footer">
    <div class="pf-brand">sunter</div>
    <div class="pf-info">Brand Guide v1.0 · Warm Intelligence v3.0 · pág. 5</div>
  </div>
</div>

</body>
</html>`;

// ─── 4. Salvar HTML intermediário ─────────────────────────────────────────────
const htmlPath = path.join(DS, 'brand-guide-print.html');
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('✓  brand-guide-print.html gerado');

// ─── 5. Chrome headless → PDF ─────────────────────────────────────────────────
const pdfPath  = path.join(DS, 'brand-guide.pdf');
const chrome   = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const cmd = `"${chrome}" \
  --headless=new \
  --no-pdf-header-footer \
  --disable-background-graphics=false \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=5000 \
  --print-to-pdf="${pdfPath}" \
  "file://${htmlPath}"`;

console.log('Gerando PDF via Chrome headless...');
try {
  execSync(cmd, { stdio: 'pipe' });
  const size = (fs.statSync(pdfPath).size / 1024).toFixed(0);
  console.log(`✓  brand-guide.pdf  (${size} KB)`);
  console.log('\nSalvo em:', pdfPath);
  execSync(`open "${pdfPath}"`);
} catch (err) {
  console.error('Erro no Chrome:', err.message);
  console.log('\nHTML disponível em:', htmlPath);
  console.log('Abra no Chrome e use Ctrl+P → Salvar como PDF para exportar.');
}
