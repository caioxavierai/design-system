/**
 * Sunter Brand Book — PDF Generator
 * Entrega institucional de marca · Warm Intelligence v3.0
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DS    = __dirname;
const FONTS = path.join(process.env.HOME, 'Library/Fonts');

// ─── Fontes → base64 ─────────────────────────────────────────────────────────
function fontB64(file) {
  return fs.readFileSync(path.join(FONTS, file)).toString('base64');
}
const b64 = {
  syneB:    fontB64('Syne-SemiBold.ttf'),
  syneM:    fontB64('Syne-Medium.ttf'),
  manropeL: fontB64('Manrope-Light.ttf'),
  manropeR: fontB64('Manrope-Regular.ttf'),
  manropeM: fontB64('Manrope-Medium.ttf'),
};

// ─── SVG Wordmarks ────────────────────────────────────────────────────────────
function svgPath(file) {
  const content = fs.readFileSync(path.join(DS, 'wordmarks', file), 'utf8');
  const d  = content.match(/d="([^"]+)"/)[1];
  const vb = content.match(/viewBox="([^"]+)"/)[1];
  return { d, viewBox: vb };
}
const wm = {
  accent:   svgPath('wordmark-accent.svg'),
  white:    svgPath('wordmark-white.svg'),
  dark:     svgPath('wordmark-dark.svg'),
  inverted: svgPath('wordmark-inverted.svg'),
};
function svg(variant, fill, width) {
  const { d, viewBox } = wm[variant];
  const [,,vw,vh] = viewBox.split(' ').map(Number);
  const h = Math.round(width * vh / vw);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${h}" viewBox="${viewBox}" role="img" aria-label="sunter"><path fill="${fill}" d="${d}"/></svg>`;
}

// ─── HTML ─────────────────────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Sunter — Brand Book 2026</title>
<style>

@font-face { font-family:'Syne';    font-weight:500; src:url('data:font/ttf;base64,${b64.syneM}')    format('truetype'); }
@font-face { font-family:'Syne';    font-weight:600; src:url('data:font/ttf;base64,${b64.syneB}')    format('truetype'); }
@font-face { font-family:'Manrope'; font-weight:300; src:url('data:font/ttf;base64,${b64.manropeL}') format('truetype'); }
@font-face { font-family:'Manrope'; font-weight:400; src:url('data:font/ttf;base64,${b64.manropeR}') format('truetype'); }
@font-face { font-family:'Manrope'; font-weight:500; src:url('data:font/ttf;base64,${b64.manropeM}') format('truetype'); }

@page { size: A4; margin: 0; }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; margin:0; padding:0; }

:root {
  --bg-0:#0A0908; --bg-1:#13120F; --bg-2:#1C1A16; --bg-3:#26231E; --bg-4:#302D27;
  --tx-1:#F5F4ED; --tx-2:#B0AEA5; --tx-3:#87867F; --tx-4:#5E5D59;
  --acc:#C96442; --acc2:#D97757; --acc3:#E8A87C;
  --lt:#F5F0E8; --lt2:#FFFFFF; --lt-tx:#1A1714; --lt-tx2:#4A4540; --lt-tx3:#7A756E;
}

body { font-family:'Manrope',sans-serif; font-weight:400; background:var(--bg-0); color:var(--tx-1); font-size:10pt; line-height:1.65; }

/* ── Páginas ─────────────────────────────────────────────────────── */
.page {
  width:210mm; min-height:297mm; position:relative; overflow:hidden;
  page-break-after:always;
}
.page:last-child { page-break-after:auto; }
.page-dark  { background:var(--bg-0); }
.page-d1    { background:var(--bg-1); }
.page-lt    { background:var(--lt); color:var(--lt-tx); }

/* ── Rodapé ──────────────────────────────────────────────────────── */
.footer {
  position:absolute; bottom:9mm; left:14mm; right:14mm;
  display:flex; justify-content:space-between; align-items:center;
  border-top:1px solid rgba(255,255,255,0.07); padding-top:4.5mm;
}
.footer-lt { border-top-color:rgba(26,23,20,0.10); }
.f-brand { font-family:'Syne',sans-serif; font-weight:600; font-size:8pt; letter-spacing:-0.02em; color:var(--acc); }
.f-info  { font-size:7pt; color:var(--tx-4); text-align:right; line-height:1.6; }
.f-info-lt { color:var(--lt-tx3); }

/* ── Utilidades ──────────────────────────────────────────────────── */
.pad     { padding:14mm 14mm 22mm; }
.eyebrow { font-size:7pt; letter-spacing:0.22em; text-transform:uppercase; font-weight:500; color:var(--tx-4); }
.eyebrow-acc { color:var(--acc); }
.eyebrow-lt  { color:var(--lt-tx3); }
.rule    { border:none; border-top:1px solid rgba(255,255,255,0.07); margin:7mm 0; }
.rule-lt { border-top-color:rgba(26,23,20,0.10); }
.gap4  { margin-bottom:4mm; }
.gap6  { margin-bottom:6mm; }
.gap8  { margin-bottom:8mm; }
.gap10 { margin-bottom:10mm; }
.gap12 { margin-bottom:12mm; }

/* ── Tipografia ──────────────────────────────────────────────────── */
.t-display {
  font-family:'Syne',sans-serif; font-weight:500;
  font-size:36pt; letter-spacing:-0.025em; line-height:1.1; color:var(--tx-1);
}
.t-title {
  font-family:'Manrope',sans-serif; font-weight:300;
  font-size:22pt; letter-spacing:-0.015em; line-height:1.2; color:var(--tx-1);
}
.t-title-sm {
  font-family:'Manrope',sans-serif; font-weight:300;
  font-size:16pt; letter-spacing:-0.01em; line-height:1.25; color:var(--tx-1);
}
.t-body { font-size:9.5pt; color:var(--tx-2); line-height:1.85; font-weight:300; }
.t-body-lt { color:var(--lt-tx2); }
.t-caption { font-size:7.5pt; color:var(--tx-3); line-height:1.7; }
.t-label  { font-size:7pt; letter-spacing:0.18em; text-transform:uppercase; font-weight:500; color:var(--tx-4); }
.t-label-lt { color:var(--lt-tx3); }

/* ── Destaques ───────────────────────────────────────────────────── */
.acc   { color:var(--acc); }
.tx1   { color:var(--tx-1); }
.tx2   { color:var(--tx-2); }

/* ── Quote / Pull quote ──────────────────────────────────────────── */
.pull-quote {
  border-left:2px solid var(--acc); padding-left:6mm; margin:8mm 0;
  font-size:13pt; font-weight:300; letter-spacing:-0.01em; line-height:1.55; color:var(--tx-1);
}
.pull-quote-lt { color:var(--lt-tx); border-left-color:var(--acc); }

/* ── Cards ───────────────────────────────────────────────────────── */
.card { background:var(--bg-2); border-radius:3px; padding:5mm 5.5mm; }
.card-lt { background:rgba(26,23,20,0.05); border-radius:3px; padding:5mm 5.5mm; }
.card-acc { background:rgba(201,100,66,0.1); border:1px solid rgba(201,100,66,0.2); border-radius:3px; padding:5mm 5.5mm; }

/* ── Grid ────────────────────────────────────────────────────────── */
.g2 { display:grid; grid-template-columns:1fr 1fr; gap:3mm; }
.g3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:3mm; }
.g-5050 { display:grid; grid-template-columns:1fr 1fr; gap:10mm; }

/* ── Chip / badge ────────────────────────────────────────────────── */
.chip { display:inline-block; background:rgba(201,100,66,0.12); color:var(--acc); border:1px solid rgba(201,100,66,0.25); border-radius:2px; font-size:7pt; letter-spacing:0.12em; text-transform:uppercase; font-weight:500; padding:1.5px 5px; }
.chip-dark { background:rgba(245,244,237,0.06); color:var(--tx-2); border-color:rgba(245,244,237,0.1); }

/* ── Valores ─────────────────────────────────────────────────────── */
.valor { padding:5.5mm 5mm; border-bottom:1px solid rgba(255,255,255,0.06); }
.valor:last-child { border-bottom:none; }
.valor-n { font-family:'Syne',sans-serif; font-weight:500; font-size:8pt; color:var(--acc); letter-spacing:0.06em; margin-bottom:1.5mm; }
.valor-title { font-size:10.5pt; font-weight:400; letter-spacing:-0.01em; color:var(--tx-1); margin-bottom:1.5mm; }
.valor-body  { font-size:8.5pt; color:var(--tx-3); line-height:1.7; }

/* ── Tom de voz ──────────────────────────────────────────────────── */
.tom-item { padding:4.5mm 5mm; background:var(--bg-2); border-radius:3px; }
.tom-title { font-size:9.5pt; font-weight:500; color:var(--tx-1); margin-bottom:1.5mm; letter-spacing:-0.005em; }
.tom-body  { font-size:8pt; color:var(--tx-3); line-height:1.75; }
.do-dont { display:grid; grid-template-columns:1fr 1fr; gap:3mm; }
.do-list, .dont-list { list-style:none; }
.do-list li::before   { content:'✓ '; color:#5ECF8A; font-weight:500; }
.dont-list li::before { content:'✗ '; color:#E06060; font-weight:500; }
.do-list li, .dont-list li { font-size:8pt; color:var(--tx-3); line-height:1.8; padding:1px 0; }

/* ── Paleta ──────────────────────────────────────────────────────── */
.swatch { border-radius:3px; overflow:hidden; }
.swatch-color { height:12mm; }
.swatch-info  { padding:2.5mm 3mm; background:var(--bg-2); }
.swatch-name  { font-size:7pt; letter-spacing:0.1em; text-transform:uppercase; font-weight:500; color:var(--tx-3); margin-bottom:0.5mm; }
.swatch-hex   { font-size:8pt; font-family:'Courier New',monospace; color:var(--tx-2); }

/* ── Pilar ───────────────────────────────────────────────────────── */
.pilar { background:var(--bg-1); border-radius:3px; padding:5.5mm 5.5mm; border-left:2px solid var(--bg-3); }
.pilar-active { border-left-color:var(--acc); }
.pilar-n { font-family:'Syne',sans-serif; font-weight:500; font-size:7.5pt; color:var(--acc); letter-spacing:0.08em; margin-bottom:1.5mm; }
.pilar-title { font-size:10pt; font-weight:400; color:var(--tx-1); margin-bottom:2mm; letter-spacing:-0.005em; }
.pilar-body  { font-size:8pt; color:var(--tx-3); line-height:1.75; }

/* ── Cover elements ──────────────────────────────────────────────── */
.cover-stripe {
  position:absolute; top:0; right:0; width:2px; height:100%;
  background:linear-gradient(to bottom, transparent 0%, var(--acc) 35%, var(--acc) 65%, transparent 100%);
}
.cover-dot {
  position:absolute; border-radius:50%; background:var(--acc); opacity:0.08;
}

/* ── Manifestação ────────────────────────────────────────────────── */
.canal { padding:4mm 4.5mm; background:var(--bg-2); border-radius:3px; }
.canal-icon { font-size:9pt; color:var(--acc); margin-bottom:1.5mm; font-weight:500; }
.canal-title { font-size:9pt; font-weight:500; color:var(--tx-1); margin-bottom:1.5mm; }
.canal-body  { font-size:7.5pt; color:var(--tx-3); line-height:1.75; }

/* ── Tabela ──────────────────────────────────────────────────────── */
.tbl { width:100%; border-collapse:collapse; font-size:8.5pt; }
.tbl th { text-align:left; font-size:7pt; letter-spacing:0.15em; text-transform:uppercase; color:var(--tx-4); padding:2.5mm 3mm; background:var(--bg-2); font-weight:500; }
.tbl td { padding:2.5mm 3mm; border-bottom:1px solid rgba(255,255,255,0.04); color:var(--tx-2); }
.tbl td:first-child { color:var(--tx-1); font-weight:500; }
.tbl tr:last-child td { border-bottom:none; }
.tbl-lt th { background:rgba(26,23,20,0.07); color:var(--lt-tx3); }
.tbl-lt td { border-bottom-color:rgba(26,23,20,0.07); color:var(--lt-tx2); }
.tbl-lt td:first-child { color:var(--lt-tx); }

</style>
</head>
<body>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 1 — CAPA
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <!-- Decoração de fundo -->
  <div class="cover-stripe"></div>
  <div class="cover-dot" style="width:180mm;height:180mm;bottom:-60mm;left:-60mm;"></div>
  <div class="cover-dot" style="width:60mm;height:60mm;top:20mm;right:20mm;opacity:0.05;"></div>

  <div class="pad">

    <!-- Topo: eyebrow de entrega -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:32mm;">
      <div>
        <div class="eyebrow gap4">Documento de Entrega de Marca</div>
        <div class="eyebrow" style="color:var(--tx-4); font-size:6.5pt;">Versão 1.0 · Abril 2026 · Uso Institucional</div>
      </div>
      <div style="text-align:right;">
        <div class="t-label" style="margin-bottom:1.5mm;">Preparado por</div>
        <div style="font-size:8pt; color:var(--tx-3); line-height:1.7;">Identidade Estratégica<br>& Design de Marca</div>
      </div>
    </div>

    <!-- Wordmark principal -->
    <div style="margin-bottom:8mm;">
      ${svg('accent', '#C96442', 400)}
    </div>

    <!-- Título do documento -->
    <div style="margin-bottom:10mm;">
      <div style="font-size:9pt; letter-spacing:0.28em; text-transform:uppercase; color:var(--tx-4); font-weight:500; margin-bottom:3mm;">Brand Book</div>
      <div class="t-display" style="color:var(--tx-1); max-width:140mm; line-height:1.15;">
        Identidade<br>estratégica<br>completa.
      </div>
    </div>

    <!-- Tagline de capa -->
    <div style="margin-bottom:20mm;">
      <div style="width:20mm; height:1px; background:var(--acc); margin-bottom:5mm;"></div>
      <div style="font-size:14pt; font-weight:300; color:var(--tx-2); letter-spacing:-0.01em; line-height:1.5; max-width:110mm;">
        IA e software que viram operação real.
      </div>
    </div>

    <!-- Índice de páginas -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5mm 6mm; max-width:140mm;">
      ${[
        ['01', 'A Marca'], ['02', 'O Contexto'], ['03', 'Fundamentos Estratégicos'],
        ['04', 'Posicionamento'], ['05', 'Valores'], ['06', 'Personalidade & Tom de Voz'],
        ['07', 'Mensagens Centrais'], ['08', 'Expressão Visual'], ['09', 'Como a Marca se Manifesta'],
        ['10', 'Síntese']
      ].map(([n, t]) => `
        <div style="display:flex; gap:3mm; align-items:baseline; padding:1.5mm 0; border-bottom:1px solid rgba(255,255,255,0.05);">
          <span style="font-size:7pt; color:var(--acc); font-family:'Syne',sans-serif; font-weight:500; min-width:5mm;">${n}</span>
          <span style="font-size:8pt; color:var(--tx-3);">${t}</span>
        </div>`).join('')}
    </div>

  </div>

  <div class="footer">
    <div class="f-brand">sunter</div>
    <div class="f-info">Brand Book v1.0 · Warm Intelligence · Uso Confidencial</div>
  </div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 2 — A MARCA + O CONTEXTO
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">01 — A Marca</div>
  <div class="t-title gap6" style="max-width:140mm;">
    Uma empresa de implementação.
  </div>

  <div class="g-5050 gap10">
    <div>
      <p class="t-body gap6">
        A Sunter existe para transformar necessidades operacionais em soluções reais —
        por meio de software sob medida e consultoria de implementação de IA.
      </p>
      <p class="t-body">
        A marca nasce para ocupar um espaço específico: o espaço entre intenção e operação funcionando.
        Não é uma consultoria que para no diagnóstico. Também não é uma fábrica de código sem leitura de negócio.
        Une as duas capacidades numa atuação única, criteriosa e comprometida com resultado real.
      </p>
    </div>
    <div>
      <div class="card gap4">
        <div class="t-label gap4" style="color:var(--acc);">Duas verticais</div>
        <div style="font-size:9.5pt; color:var(--tx-1); font-weight:400; margin-bottom:2mm;">Software sob medida</div>
        <div style="font-size:8.5pt; color:var(--tx-3); line-height:1.7; margin-bottom:4mm;">Quando o cliente já tem demanda mais clara. Curadoria técnica e execução bem conduzida.</div>
        <div style="width:100%; height:1px; background:rgba(255,255,255,0.06); margin-bottom:4mm;"></div>
        <div style="font-size:9.5pt; color:var(--tx-1); font-weight:400; margin-bottom:2mm;">Consultoria de IA</div>
        <div style="font-size:8.5pt; color:var(--tx-3); line-height:1.7;">Quando a empresa ainda precisa diagnosticar, estruturar e descobrir a solução certa antes de implantar.</div>
      </div>
    </div>
  </div>

  <hr class="rule">

  <div class="eyebrow gap4">02 — O Contexto</div>
  <div class="t-title-sm gap6" style="max-width:130mm;">
    A distância entre necessidade e implementação real.
  </div>

  <div class="g3">
    <div class="card">
      <div style="font-size:8pt; color:var(--acc); font-weight:500; margin-bottom:2.5mm; letter-spacing:0.06em;">Cenário A</div>
      <div style="font-size:9pt; color:var(--tx-1); margin-bottom:2mm; font-weight:400;">Sabe o que quer</div>
      <div class="t-caption">Tem intenção clara de construir um sistema ou automação, mas falta critério técnico e execução bem conduzida.</div>
    </div>
    <div class="card">
      <div style="font-size:8pt; color:var(--acc); font-weight:500; margin-bottom:2.5mm; letter-spacing:0.06em;">Cenário B</div>
      <div style="font-size:9pt; color:var(--tx-1); margin-bottom:2mm; font-weight:400;">Sente o problema</div>
      <div class="t-caption">Ainda não sabe exatamente o que precisa construir, mas já sente os efeitos de uma operação travada ou pouco escalável.</div>
    </div>
    <div class="card-acc">
      <div style="font-size:8pt; color:var(--acc); font-weight:500; margin-bottom:2.5mm; letter-spacing:0.06em;">Solução</div>
      <div style="font-size:9pt; color:var(--tx-1); margin-bottom:2mm; font-weight:400;">A Sunter atua</div>
      <div class="t-caption" style="color:var(--tx-2);">Nos dois cenários o problema é o mesmo. É exatamente nesse espaço que a Sunter atua.</div>
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 2</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 3 — FUNDAMENTOS ESTRATÉGICOS
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">03 — Fundamentos Estratégicos</div>
  <div class="t-title gap10" style="max-width:140mm;">
    O que direciona todas as decisões da marca.
  </div>

  <div style="display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto auto; gap:3mm; margin-bottom:8mm;">

    <div style="background:var(--bg-2); border-radius:3px; padding:6mm 6mm;">
      <div class="t-label gap4" style="color:var(--acc);">Propósito</div>
      <div style="font-size:10pt; color:var(--tx-1); line-height:1.6; font-weight:400;">
        Transformar necessidades operacionais em implementação real,
        com software e IA aplicados de forma útil, clara e funcional.
      </div>
    </div>

    <div style="background:var(--bg-2); border-radius:3px; padding:6mm 6mm;">
      <div class="t-label gap4" style="color:var(--acc);">Visão</div>
      <div style="font-size:10pt; color:var(--tx-1); line-height:1.6; font-weight:400;">
        Ser reconhecida como a empresa que melhor transforma problemas e intenções de negócio
        em software sob medida e implementação de IA com resultado real para PMEs.
      </div>
    </div>

    <div style="background:var(--bg-2); border-radius:3px; padding:6mm 6mm;">
      <div class="t-label gap4" style="color:var(--acc);">Missão</div>
      <div style="font-size:10pt; color:var(--tx-1); line-height:1.6; font-weight:400;">
        Diagnosticar, especificar, construir e implantar soluções sob medida — unindo clareza
        de negócio, critério técnico e proximidade com o cliente para fazer a tecnologia
        funcionar na prática.
      </div>
    </div>

    <div style="background:var(--bg-3); border-radius:3px; padding:6mm 6mm; border:1px solid rgba(201,100,66,0.2);">
      <div class="t-label gap4" style="color:var(--acc);">Promessa</div>
      <div style="font-size:10pt; color:var(--tx-1); line-height:1.6; font-weight:400;">
        A Sunter transforma o que hoje está na cabeça do cliente — ou travado na operação —
        em implementação real.
      </div>
    </div>

  </div>

  <div style="background:var(--acc); border-radius:3px; padding:6mm 7mm; display:flex; align-items:center; gap:6mm;">
    <div style="flex:1;">
      <div style="font-size:7pt; letter-spacing:0.22em; text-transform:uppercase; font-weight:500; color:rgba(10,9,8,0.5); margin-bottom:2mm;">Verdade Central da Marca</div>
      <div style="font-size:14pt; color:#0A0908; font-weight:400; letter-spacing:-0.01em; line-height:1.4;">
        A Sunter existe para transformar<br>necessidade operacional em implementação real.
      </div>
    </div>
    <div style="opacity:0.15;">
      ${svg('inverted', '#0A0908', 90)}
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 3</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 4 — POSICIONAMENTO
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">04 — Posicionamento</div>
  <div class="t-title gap10">O território que a Sunter ocupa.</div>

  <div class="g-5050 gap8">
    <div>
      <div style="margin-bottom:6mm;">
        <div class="t-label gap4">Categoria</div>
        <div style="font-size:13pt; color:var(--tx-1); font-weight:400; letter-spacing:-0.01em;">Empresa de implementação.</div>
      </div>
      <div style="margin-bottom:6mm;">
        <div class="t-label gap4">Território</div>
        <div style="font-size:13pt; color:var(--tx-1); font-weight:400; letter-spacing:-0.01em;">Implementação real.</div>
      </div>
      <div>
        <div class="t-label gap4">Diferencial</div>
        <div class="t-body">
          A Sunter une leitura de negócio, curadoria técnica e implantação real.
          Atua tanto quando o cliente já sabe o que quer construir quanto
          quando ainda precisa descobrir a solução certa.
        </div>
      </div>
    </div>
    <div>
      <div class="t-label gap4">One-liner</div>
      <div class="pull-quote gap8">
        Software sob medida e implementação de IA para transformar necessidade operacional em solução real.
      </div>
      <div class="t-label gap4">Frase Institucional</div>
      <div style="font-size:11pt; color:var(--tx-2); font-weight:300; letter-spacing:-0.01em; line-height:1.55;">
        A Sunter transforma necessidade operacional em implementação real.
      </div>
    </div>
  </div>

  <hr class="rule">

  <!-- Tagline hero -->
  <div style="text-align:center; padding:10mm 0 8mm;">
    <div class="t-label gap6" style="color:var(--tx-4); text-align:center;">Tagline oficial</div>
    <div style="font-family:'Syne',sans-serif; font-weight:500; font-size:32pt; letter-spacing:-0.025em; color:var(--acc); line-height:1.1;">
      IA e software que<br>viram operação real.
    </div>
  </div>

  <div style="text-align:center;">
    <span class="chip">Tagline principal — uso obrigatório em materiais institucionais</span>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 4</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 5 — VALORES
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">05 — Valores</div>
  <div class="t-title gap8" style="max-width:130mm;">Os princípios que guiam cada decisão, entrega e relacionamento.</div>

  <div style="background:var(--bg-1); border-radius:4px; overflow:hidden; margin-bottom:8mm;">
    <div class="valor">
      <div class="valor-n">01</div>
      <div class="valor-title">Execução acima da intenção</div>
      <div class="valor-body">Ideia só tem valor quando vira solução funcionando. A Sunter não aceita entregar diagnóstico e chamar de resultado.</div>
    </div>
    <div class="valor">
      <div class="valor-n">02</div>
      <div class="valor-title">Clareza como compromisso</div>
      <div class="valor-body">Com o cliente e com o time. Comunicação direta, sem ruído, sem promessa que não sustenta. Bloqueios e riscos são comunicados cedo.</div>
    </div>
    <div class="valor">
      <div class="valor-n">03</div>
      <div class="valor-title">Critério técnico a serviço do negócio</div>
      <div class="valor-body">A melhor solução não é a mais complexa. É a que faz mais sentido. Tecnologia serve ao negócio — nunca o contrário.</div>
    </div>
    <div class="valor">
      <div class="valor-n">04</div>
      <div class="valor-title">Dono do jogo</div>
      <div class="valor-body">A Sunter não terceiriza problema. Assume a responsabilidade de fazer acontecer — sem se esconder quando algo trava.</div>
    </div>
    <div class="valor" style="border-bottom:none;">
      <div class="valor-n">05</div>
      <div class="valor-title">Relacionamentos de longo prazo</div>
      <div class="valor-body">Confiança se constrói com entrega real, consistência e parceria verdadeira. Não com promessa de início de projeto.</div>
    </div>
  </div>

  <!-- O que é / não é -->
  <div class="g-5050">
    <div>
      <div class="t-label gap4" style="color:#5ECF8A;">A Sunter é</div>
      <div style="background:var(--bg-2); border-radius:3px; padding:4mm 5mm;">
        ${['Uma empresa de implementação', 'Software house com curadoria técnica', 'Consultoria de implementação de IA', 'Parceira de execução criteriosa', 'Empresa que traduz necessidade em solução'].map(t =>
          `<div style="font-size:8pt; color:var(--tx-2); padding:1.5mm 0; border-bottom:1px solid rgba(255,255,255,0.04); line-height:1.6;">
            <span style="color:#5ECF8A; margin-right:2mm;">✓</span>${t}
          </div>`).join('')}
      </div>
    </div>
    <div>
      <div class="t-label gap4" style="color:#E06060;">A Sunter não é</div>
      <div style="background:var(--bg-2); border-radius:3px; padding:4mm 5mm;">
        ${['Fábrica de código sem leitura de negócio', 'Consultoria que entrega só diagnóstico', 'Marca que vende discurso de IA sem entrega', 'Operação burocrática, lenta ou distante', 'Empresa que se esconde quando algo trava'].map(t =>
          `<div style="font-size:8pt; color:var(--tx-2); padding:1.5mm 0; border-bottom:1px solid rgba(255,255,255,0.04); line-height:1.6;">
            <span style="color:#E06060; margin-right:2mm;">✗</span>${t}
          </div>`).join('')}
      </div>
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 5</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 6 — PERSONALIDADE & TOM DE VOZ
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">06 — Personalidade & Tom de Voz</div>
  <div class="t-title gap8">Como a marca se comporta e fala.</div>

  <div class="g-5050 gap8">

    <!-- Personalidade -->
    <div>
      <div class="t-label gap5">Personalidade</div>
      <div class="t-body gap6">
        A Sunter é percebida como uma marca <strong style="color:var(--tx-1);">técnica, pragmática, confiável e próxima</strong>.
        Não tenta parecer sofisticada por excesso de jargão.
        Transmite segurança por clareza, critério e capacidade real de fazer acontecer.
        <br><br>
        Madura, envolvida e criteriosa.<br>Não é fria. Também não é performática.
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:2mm;">
        ${['Técnica', 'Pragmática', 'Confiável', 'Próxima', 'Consultiva', 'Inquieta'].map(t =>
          `<span class="chip">${t}</span>`).join('')}
      </div>
    </div>

    <!-- Tom de voz - pilares -->
    <div>
      <div class="t-label gap5">Três pilares de voz</div>
      <div style="display:flex; flex-direction:column; gap:2.5mm;">
        <div class="tom-item">
          <div class="tom-title">Clareza executiva</div>
          <div class="tom-body">Fala de forma direta, organizada e inteligível. Explica software e IA como ferramentas de negócio — não como vitrine tecnológica.</div>
        </div>
        <div class="tom-item">
          <div class="tom-title">Pragmatismo técnico</div>
          <div class="tom-body">Demonstra domínio técnico sempre conectado à utilidade prática, ao contexto operacional e ao resultado real.</div>
        </div>
        <div class="tom-item">
          <div class="tom-title">Proximidade com critério</div>
          <div class="tom-body">É próxima, consultiva e humana, sem perder firmeza. Não bajula, não floreia e não se esconde atrás de linguagem vazia.</div>
        </div>
      </div>
    </div>
  </div>

  <hr class="rule">

  <!-- Faz / Evita -->
  <div class="t-label gap5">Guia de voz</div>
  <div class="do-dont">
    <div style="background:rgba(94,207,138,0.06); border:1px solid rgba(94,207,138,0.12); border-radius:3px; padding:4.5mm 5mm;">
      <div style="font-size:7.5pt; color:#5ECF8A; letter-spacing:0.15em; text-transform:uppercase; font-weight:500; margin-bottom:3mm;">A voz da Sunter faz</div>
      <ul class="do-list">
        <li>Fala com linguagem de negócio, não de tecnologia</li>
        <li>Nomeia com clareza o que entrega</li>
        <li>Conecta tecnologia com receita e eficiência</li>
        <li>Transmite segurança sem arrogância</li>
        <li>Mostra domínio técnico sem exibicionismo</li>
      </ul>
    </div>
    <div style="background:rgba(224,96,96,0.06); border:1px solid rgba(224,96,96,0.12); border-radius:3px; padding:4.5mm 5mm;">
      <div style="font-size:7.5pt; color:#E06060; letter-spacing:0.15em; text-transform:uppercase; font-weight:500; margin-bottom:3mm;">A voz da Sunter evita</div>
      <ul class="dont-list">
        <li>Jargão técnico excessivo</li>
        <li>Promessas infladas sem respaldo</li>
        <li>Discurso genérico de inovação</li>
        <li>Tom publicitário vazio</li>
        <li>Falar de resultado sem dizer o que será implantado</li>
      </ul>
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 6</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 7 — MENSAGENS CENTRAIS
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">07 — Mensagens Centrais</div>
  <div class="t-title gap8">A narrativa que sustenta toda a comunicação.</div>

  <!-- Mensagem-mãe -->
  <div style="background:var(--bg-2); border-radius:4px; padding:6mm 7mm; margin-bottom:8mm; border-left:2px solid var(--acc);">
    <div class="t-label gap4" style="color:var(--acc);">Mensagem-mãe</div>
    <div style="font-size:12pt; color:var(--tx-1); font-weight:300; letter-spacing:-0.01em; line-height:1.6;">
      A Sunter transforma necessidades operacionais em implementação real,
      por meio de software sob medida e consultoria de implementação de IA.
    </div>
  </div>

  <!-- Três pilares -->
  <div class="t-label gap5">Três pilares de mensagem</div>
  <div style="display:flex; flex-direction:column; gap:3mm; margin-bottom:8mm;">

    <div class="pilar pilar-active">
      <div class="pilar-n">Pilar I</div>
      <div class="pilar-title">Clareza antes da construção</div>
      <div class="pilar-body">
        A Sunter não constrói no escuro. Antes de desenvolver ou implantar, entende o problema,
        organiza a demanda e traduz a necessidade em uma solução viável —
        com curadoria técnica desde o primeiro contato.
      </div>
    </div>

    <div class="pilar pilar-active">
      <div class="pilar-n">Pilar II</div>
      <div class="pilar-title">Implementação real, não discurso</div>
      <div class="pilar-body">
        A Sunter existe para tirar a solução da ideia e colocar em operação.
        Não vende só diagnóstico, nem só código, nem narrativa de IA sem entrega.
        O foco é a solução útil e rodando na prática.
      </div>
    </div>

    <div class="pilar pilar-active">
      <div class="pilar-n">Pilar III</div>
      <div class="pilar-title">Tecnologia com utilidade prática</div>
      <div class="pilar-body">
        A melhor solução não é a mais complexa. É a que faz sentido para o negócio,
        funciona no dia a dia e gera resultado real.
        Critério técnico sempre a serviço do negócio.
      </div>
    </div>

  </div>

  <!-- Regra de percepção -->
  <div style="background:rgba(201,100,66,0.08); border:1px solid rgba(201,100,66,0.15); border-radius:3px; padding:4.5mm 5.5mm;">
    <div class="t-label gap4" style="color:var(--acc);">Teste de alinhamento</div>
    <div style="font-size:8.5pt; color:var(--tx-2); line-height:1.75;">
      Se uma peça, texto ou apresentação puder ser confundida com um curso de IA, um SaaS qualquer,
      uma consultoria genérica ou uma campanha de marketing sem lastro —
      <strong style="color:var(--tx-1);">ela ainda não está alinhada com a marca Sunter.</strong>
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 7</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 8 — EXPRESSÃO VISUAL
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">08 — Expressão Visual</div>
  <div class="t-title gap4">Warm Intelligence.</div>
  <div class="t-body gap8" style="max-width:130mm;">
    A identidade visual combina sofisticação premium, profundidade visual, calor humano controlado
    e precisão estrutural. O sistema visual deve transmitir sensação de inteligência viva e ativa.
  </div>

  <!-- Paleta -->
  <div class="t-label gap4">Paleta de cores</div>
  <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:2mm; margin-bottom:4mm;">
    ${[
      ['#0A0908','bg-0','Canvas dark'],['#13120F','bg-1','Surface 1'],
      ['#1C1A16','bg-2','Surface 2'],['#26231E','bg-3','Surface 3'],
    ].map(([hex,tok,name]) => `
      <div class="swatch">
        <div class="swatch-color" style="background:${hex}; border:1px solid rgba(255,255,255,0.08);"></div>
        <div class="swatch-info">
          <div class="swatch-name">${tok}</div>
          <div class="swatch-hex">${hex}</div>
          <div style="font-size:6.5pt; color:var(--tx-4);">${name}</div>
        </div>
      </div>`).join('')}
  </div>
  <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:2mm; margin-bottom:5mm;">
    ${[
      ['#F5F4ED','tx-1','Parchment'],['#B0AEA5','tx-2','Warm silver'],
      ['#C96442','acc','Terracotta'],['#F5F0E8','lt-0','Canvas light'],
    ].map(([hex,tok,name]) => `
      <div class="swatch">
        <div class="swatch-color" style="background:${hex}; ${tok.startsWith('lt') ? 'border:1px solid rgba(26,23,20,0.1);' : ''}"></div>
        <div class="swatch-info">
          <div class="swatch-name">${tok}</div>
          <div class="swatch-hex">${hex}</div>
          <div style="font-size:6.5pt; color:var(--tx-4);">${name}</div>
        </div>
      </div>`).join('')}
  </div>

  <hr class="rule">

  <!-- Linguagem visual -->
  <div class="g-5050">
    <div>
      <div class="t-label gap4" style="color:#5ECF8A;">A marca visualmente é</div>
      <div style="background:var(--bg-2); border-radius:3px; padding:4mm 5mm;">
        ${['Premium e contemporânea','Dark premium como base','Terracotta como único accent','Tipografia fina e elegante','Estruturas retas e bordas contidas','Motion como linguagem de inteligência'].map(t =>
          `<div style="font-size:8pt; color:var(--tx-2); padding:1.5mm 0; border-bottom:1px solid rgba(255,255,255,0.04); line-height:1.6;"><span style="color:#5ECF8A; margin-right:2mm;">✓</span>${t}</div>`).join('')}
      </div>
    </div>
    <div>
      <div class="t-label gap4" style="color:#E06060;">A marca visualmente não é</div>
      <div style="background:var(--bg-2); border-radius:3px; padding:4mm 5mm;">
        ${['Fria ou genérica','Saturada ou barulhenta','Infantilizada','Futurista clichê','Branca e asséptica','Multicolorida ou instável'].map(t =>
          `<div style="font-size:8pt; color:var(--tx-2); padding:1.5mm 0; border-bottom:1px solid rgba(255,255,255,0.04); line-height:1.6;"><span style="color:#E06060; margin-right:2mm;">✗</span>${t}</div>`).join('')}
      </div>
    </div>
  </div>

  <div style="margin-top:5mm; background:rgba(201,100,66,0.06); border:1px solid rgba(201,100,66,0.15); border-radius:3px; padding:4mm 5mm;">
    <div class="t-label gap3" style="color:var(--acc);">Fonte de verdade visual</div>
    <div style="font-size:8.5pt; color:var(--tx-3); line-height:1.7;">
      Toda regra normativa de cor, tipografia, componente, token, sombra e motion segue o documento
      <strong style="color:var(--tx-2); font-family:'Courier New',monospace; font-size:8pt;">sunter-design-system.md</strong>
      — Design System Warm Intelligence v3.0.
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 8</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 9 — COMO A MARCA SE MANIFESTA
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">
<div class="pad">

  <div class="eyebrow gap4">09 — Como a Marca se Manifesta</div>
  <div class="t-title gap8">Em cada ponto de contato, a mesma percepção.</div>

  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:3mm; margin-bottom:6mm;">

    <div class="canal">
      <div class="canal-icon">Site Institucional</div>
      <div class="canal-title">Clara, premium e executora</div>
      <div class="canal-body">A empresa deve parecer madura e confiável — sem cair na estética de software genérico ou startup de tecnologia.</div>
    </div>

    <div class="canal">
      <div class="canal-icon">Proposta Comercial</div>
      <div class="canal-title">Credibilidade e precisão</div>
      <div class="canal-body">Menos efeito, mais critério. Menos promessa abstrata, mais leitura de negócio e implantação demonstrada.</div>
    </div>

    <div class="canal">
      <div class="canal-icon">Materiais de Diagnóstico</div>
      <div class="canal-title">Clareza e inteligência</div>
      <div class="canal-body">A marca soa como empresa que entende o problema antes de propor a solução. Organiza a complexidade em plano de implementação.</div>
    </div>

    <div class="canal">
      <div class="canal-icon">LinkedIn</div>
      <div class="canal-title">Executiva e analítica</div>
      <div class="canal-body">Educa e argumenta com clareza. Sem parecer anúncio. Sem discurso abstrato. Linguagem de gestão e operação real.</div>
    </div>

    <div class="canal">
      <div class="canal-icon">Instagram</div>
      <div class="canal-title">Direta e visual</div>
      <div class="canal-body">Orientada a dor, prova e bastidor. Não é perfil de guru de IA. Não é feed de frases sobre inovação.</div>
    </div>

    <div class="canal">
      <div class="canal-icon">Produto & App</div>
      <div class="canal-title">Sistema premium</div>
      <div class="canal-body">A experiência materializa o discurso: consistência visual, sensação de sistema vivo. Útil, claro, confiável e bem implantado.</div>
    </div>

  </div>

  <hr class="rule">

  <!-- Sinais de território -->
  <div class="g-5050">
    <div>
      <div class="t-label gap4" style="color:var(--acc);">Sinais que validam o território</div>
      <div class="t-caption" style="color:var(--tx-3); margin-bottom:4mm;">A Sunter reforça seu posicionamento quando comunica:</div>
      ${['Diagnóstico de gargalo real','Explicação de erro comum de implementação','Bastidor de projeto e implantação','Prova visual de processo ou fluxo funcionando','Leitura executiva de problema operacional','Linguagem clara sobre adoção e uso real'].map(t =>
        `<div style="font-size:8pt; color:var(--tx-2); padding:1.5mm 0; border-bottom:1px solid rgba(255,255,255,0.04);"><span style="color:var(--acc); margin-right:2mm;">→</span>${t}</div>`).join('')}
    </div>
    <div>
      <div class="t-label gap4">Regra de percepção pública</div>
      <div style="background:var(--bg-2); border-radius:3px; padding:5mm 5.5mm;">
        <div class="t-body" style="margin-bottom:4mm;">
          Quando a Sunter aparece publicamente, ela deve sempre reforçar a mesma categoria percebida:
        </div>
        <div style="font-family:'Syne',sans-serif; font-weight:500; font-size:13pt; color:var(--acc); letter-spacing:-0.01em; margin-bottom:4mm;">
          empresa de implementação.
        </div>
        <div class="t-caption">
          Isso significa que sua presença deve aproximar a marca de clareza de problema,
          critério de solução, implantação real e prova de uso — nunca de discurso genérico.
        </div>
      </div>
    </div>
  </div>

</div>
<div class="footer">
  <div class="f-brand">sunter</div>
  <div class="f-info">Brand Book v1.0 · pág. 9</div>
</div>
</div>


<!-- ════════════════════════════════════════════════════════════════
     PÁGINA 10 — SÍNTESE / CLOSING
     ════════════════════════════════════════════════════════════════ -->
<div class="page page-dark">

  <!-- Fundo decorativo -->
  <div style="position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;">
    <div style="position:absolute;width:300mm;height:300mm;border-radius:50%;background:radial-gradient(circle,rgba(201,100,66,0.07) 0%,transparent 70%);top:-80mm;right:-80mm;"></div>
    <div style="position:absolute;width:200mm;height:200mm;border-radius:50%;background:radial-gradient(circle,rgba(201,100,66,0.04) 0%,transparent 70%);bottom:-60mm;left:-40mm;"></div>
  </div>

  <div class="pad" style="position:relative; display:flex; flex-direction:column; min-height:297mm;">

    <!-- Eyebrow + número -->
    <div class="eyebrow gap4">10 — Síntese</div>

    <!-- Síntese textual -->
    <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:10mm 0;">

      <div style="max-width:150mm; margin-bottom:12mm;">
        <div class="t-title" style="margin-bottom:6mm; font-size:20pt;">
          Em tudo que a Sunter faz, diz e entrega, a mesma ideia.
        </div>
        <p class="t-body gap6">
          A Sunter é uma empresa de implementação.
          Une software sob medida e consultoria de implementação de IA para transformar
          demandas, gargalos e intenções de negócio em soluções reais, úteis e funcionando na prática.
        </p>
        <p class="t-body gap6">
          Sua linguagem verbal é direta, pragmática e conectada ao negócio.
          Sua linguagem visual é premium, precisa, viva e comprometida com a operação real.
        </p>
        <p class="t-body">
          Em ambiente institucional, comercial e social, a Sunter deve sempre parecer
          <strong style="color:var(--tx-1);">a empresa que implementa o que outras apenas prometem.</strong>
        </p>
      </div>

      <!-- Linha decorativa -->
      <div style="width:20mm; height:1px; background:var(--acc); margin-bottom:8mm;"></div>

      <!-- Tagline final -->
      <div style="font-family:'Syne',sans-serif; font-weight:500; font-size:28pt; letter-spacing:-0.025em; color:var(--acc); line-height:1.1; margin-bottom:12mm;">
        IA e software que<br>viram operação real.
      </div>

      <!-- Wordmark final -->
      ${svg('white', '#F5F4ED', 160)}

    </div>

    <!-- Rodapé de entrega -->
    <div style="border-top:1px solid rgba(255,255,255,0.07); padding-top:6mm; display:flex; justify-content:space-between; align-items:flex-end;">
      <div>
        <div class="t-label gap3" style="color:var(--tx-4);">Documento de entrega de marca</div>
        <div style="font-size:8pt; color:var(--tx-4); line-height:1.7;">
          Brand Book v1.0 · Sunter Tecnologia · Abril 2026<br>
          Uso institucional, comercial, editorial e de onboarding
        </div>
      </div>
      <div style="text-align:right;">
        <div class="t-label gap3" style="color:var(--tx-4);">Design System</div>
        <div style="font-size:8pt; color:var(--tx-4);">Warm Intelligence v3.0</div>
      </div>
    </div>

  </div>
</div>


</body>
</html>`;

// ─── Salvar HTML ──────────────────────────────────────────────────────────────
const htmlPath = path.join(DS, 'brandbook-print.html');
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('✓  brandbook-print.html gerado');

// ─── Chrome headless → PDF ───────────────────────────────────────────────────
const pdfPath = path.join(DS, 'brandbook-sunter.pdf');
const chrome  = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
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
  const kb = (fs.statSync(pdfPath).size / 1024).toFixed(0);
  console.log(`✓  brandbook-sunter.pdf  (${kb} KB)`);
  console.log('\nSalvo em:', pdfPath);
  execSync(`open "${pdfPath}"`);
} catch (err) {
  console.error('Erro Chrome:', err.message);
  console.log('\nHTML disponível em:', htmlPath);
  console.log('Abra no Chrome → Imprimir → Salvar como PDF');
}
