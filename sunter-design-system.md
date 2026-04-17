# Sunter Design System — v3.0 "Warm Intelligence"
> Documentação completa · Marca · Tokens · Angular · React · Tailwind
> Sunter Tecnologia · Salvador, BA · 2026

---

## Como usar este documento

| Bloco | Seções | Para quem |
|-------|--------|-----------|
| **0 — Marca** | Wordmark, variações, regras de uso | Designers, marketing, devs |
| 🎨 **I — Design System** | 1–6 | Designers, todos os devs |
| 🔧 **II — CSS Tokens** | 7 | Todos os projetos |
| ⚙️ **III — Angular / PrimeNG** | 8–9 | Devs Angular |
| ⚛️ **IV — React / Tailwind** | 10–11 | Devs React |

> **Regra de uso:** O Bloco 0 é a referência de marca — consulte sempre antes de usar o logotipo. O Bloco I é obrigatório para todos os devs. Os blocos II–IV são independentes.

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BLOCO 0 — MARCA
# Identidade, wordmark e regras de uso.
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 0. Identidade de Marca

### 0.1 Filosofia

A marca Sunter é o **wordmark**. Apenas o wordmark.

Nenhum símbolo, ícone ou elemento decorativo complementa a identidade — a força está na tipografia e na cor. O nome *sunter* em lowercase com tracking fechado é uma afirmação de confiança: marcas que precisam de um símbolo para ser reconhecidas ainda estão construindo sua identidade.

### 0.2 Especificação do Wordmark

| Atributo | Valor |
|----------|-------|
| **Tipografia** | Syne, weight 600 |
| **Caixa** | lowercase obrigatório — nunca uppercase ou title case |
| **Letter-spacing** | `-0.02em` |
| **Símbolo** | nenhum |
| **Cor principal** | `#C96442` (terracotta) em fundos escuros |

```html
<!-- Implementação correta em CSS/HTML -->
<span style="font-family:'Syne',sans-serif; font-weight:600; letter-spacing:-0.02em;">sunter</span>
```

### 0.3 Variações de Cor Aprovadas

| Variação | Cor do texto | Fundo | Uso |
|----------|-------------|-------|-----|
| **Primária** | `#C96442` terracotta | Dark (`#0A0908` – `#13120F`) | Uso principal — digital |
| **Monocromática** | `#F5F4ED` parchment | Dark | Quando accent não é possível |
| **Light mode** | `#1A1714` near-black | Light (`#F5F0E8` – `#FFFFFF`) | Interfaces claras |
| **Invertida** | `#0A0908` dark | `#C96442` terracotta | Fundos accent |

### 0.4 Espaço de Respiro

A unidade de respiro **x** = altura das letras minúsculas (x-height) no tamanho de uso.

- Espaço mínimo em todos os lados: **1x**
- Nenhum elemento visual entra nessa área (texto, imagem, borda, ícone)
- Prático: em 24px font-size → ~17px de respiro mínimo em cada lado

### 0.5 Tamanho Mínimo

| Contexto | Mínimo | Recomendado |
|----------|--------|-------------|
| Digital | 18px font-size / ~72px largura | 24px+ |
| Print | 20mm de largura | 30mm+ |
| Favicon / ícone | "s" isolado em Syne 600 | — |

### 0.6 Regras Absolutas

**✅ Sempre:**
- Usar Syne weight 600 exclusivamente para o wordmark
- Manter letter-spacing em `-0.02em`
- Respeitar as 4 variações de cor aprovadas
- Manter as proporções originais da fonte

**❌ Nunca:**
- Distorcer (esticar horizontal ou verticalmente)
- Rotacionar o wordmark
- Aplicar efeitos (sombra, glow, outline, gradiente no texto)
- Usar fonte diferente (Manrope, Arial, etc.)
- Uppercase ou letter-spacing diferente de `-0.02em`
- Colocar em fundo colorido fora da paleta aprovada
- Colocar em baixo contraste (mínimo WCAG AA: 4.5:1)

### 0.7 Fundos Aprovados

| Fundo | Hex | Versão do wordmark |
|-------|-----|--------------------|
| Canvas dark | `#0A0908` | Primária (terracotta) |
| Surface dark | `#13120F` | Primária (terracotta) |
| Canvas light | `#F5F0E8` | Light mode (dark) |
| White | `#FFFFFF` | Light mode — evitar, preferir cream |
| Terracotta | `#C96442` | Invertida (dark) |

### 0.8 Arquivos de Marca

Todos os arquivos de logomarca estão em `Logomarca/`, organizados por formato:

**`Logomarca/SVG/`** — vetores puros (paths, sem dependência de font)

| Arquivo | Uso |
|---------|-----|
| `logo-sunter-principal.svg` | Uso principal — terracotta em fundos escuros |
| `logo-sunter-white.svg` | Monocromática — parchment em fundos escuros |
| `logo-sunter-dark.svg` | Light mode — near-black em fundos claros |
| `logo-sunter-invertida.svg` | Fundo terracotta |

**`Logomarca/PNG/`** — 5239×2349 px · 300 DPI · fundo transparente

| Arquivo | Uso |
|---------|-----|
| `logo-sunter-principal.png` | Composição digital — sobre fundos escuros |
| `logo-sunter-white.png` | Composição digital — monocromática |
| `logo-sunter-dark.png` | Composição digital — sobre fundos claros |
| `logo-sunter-invertida.png` | Composição digital — sobre terracotta |

**`Logomarca/JPG/`** — 5244×2357 px · 300 DPI · fundo ideal incluso

| Arquivo | Fundo | Uso |
|---------|-------|-----|
| `logo-sunter-principal.jpg` | `#0A0908` | Redes sociais, email, apresentação |
| `logo-sunter-white.jpg` | `#13120F` | Redes sociais, email, apresentação |
| `logo-sunter-dark.jpg` | `#F5F0E8` | Redes sociais, email, apresentação |
| `logo-sunter-invertida.jpg` | `#C96442` | Redes sociais, email, apresentação |

> **SVG é sempre o formato preferido** para web, produto e qualquer ferramenta que aceite vetores. PNG e JPG são para contextos que não suportam SVG.

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BLOCO I — DESIGN SYSTEM
# Identidade visual, tokens, componentes
# e diretrizes. Agnóstico de framework.
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. Visão Geral

O **Sunter Design System v3.0 "Warm Intelligence"** é o sistema de design proprietário da Sunter Tecnologia. Substitui integralmente o v2.0 e define a identidade visual, tokens, componentes e animações para todos os produtos digitais.

### Conceito central

> Dark premium luxury com calor humano. O DNA cromático do Claude/Anthropic aplicado a um shell escuro de alto luxo — fundos pretos com undertone oliva quente, tipografia ultra-fina, terracotta como único accent, e animações que comunicam inteligência ativa.

### Princípios

| Princípio | Descrição |
|-----------|-----------|
| **Calor sem luz** | Dark-first com undertones quentes — zero azul frio em qualquer superfície |
| **Fineza estrutural** | Bordas 1px, tipografia weight 200–400, raios contidos (4px padrão) |
| **Movimento com intenção** | Cada animação comunica um estado — não é decoração |
| **Consistência dual** | Dark e light mode com mesma paleta de accent — mesma identidade nos dois |
| **Fonte da verdade** | Este documento é a referência — em caso de dúvida, consulte aqui |

---

## 2. Paleta de Cores

### 2.1 Filosofia

Todas as superfícies têm **undertone oliva/marrom** — jamais cinza frio ou azul. O accent terracotta `#C96442` é o único ponto de cor cromática. Funciona identicamente nos dois modos.

### 2.2 Dark Mode

| Token | Hex | Uso |
|-------|-----|-----|
| `--snt-bg-0` | `#0A0908` | Canvas raiz — body background |
| `--snt-bg-1` | `#13120F` | Sidebar, header, nav |
| `--snt-bg-2` | `#1C1A16` | Cards primários, painéis |
| `--snt-bg-3` | `#26231E` | Cards elevados, overlays |
| `--snt-bg-4` | `#302D27` | Inputs, botões secundários |
| `--snt-bg-5` | `#3D3930` | Hover states |
| `--snt-tx-1` | `#F5F4ED` | Texto primário (parchment) |
| `--snt-tx-2` | `#B0AEA5` | Texto secundário (warm silver) |
| `--snt-tx-3` | `#87867F` | Texto terciário (stone gray) |
| `--snt-tx-4` | `#5E5D59` | Texto desabilitado (olive gray) |

### 2.3 Light Mode

| Token | Hex | Uso |
|-------|-----|-----|
| `--snt-bg-0` | `#F5F0E8` | Canvas raiz — cream quente, não branco |
| `--snt-bg-1` | `#EDE8DF` | Sidebar, header |
| `--snt-bg-2` | `#FFFFFF` | Cards primários |
| `--snt-bg-3` | `#FBF8F3` | Cards secundários |
| `--snt-bg-4` | `#F0EBE3` | Inputs, botões secundários |
| `--snt-bg-5` | `#E8E1D7` | Hover states |
| `--snt-tx-1` | `#1A1714` | Texto primário (near-black oliva) |
| `--snt-tx-2` | `#4A4540` | Texto secundário |
| `--snt-tx-3` | `#7A756E` | Texto terciário |
| `--snt-tx-4` | `#B0A89E` | Texto desabilitado |

### 2.4 Accent (igual nos dois modos)

| Token | Hex | Uso |
|-------|-----|-----|
| `--snt-accent` | `#C96442` | CTA primário, bordas ativas, ícones de destaque |
| `--snt-accent-warm` | `#D97757` | Hover do accent, variante coral |
| `--snt-accent-light` | `#E8A87C` | Texto accent em fundos escuros |
| `--snt-accent-glow` | `rgba(201,100,66,.18)` | Glow atmosférico |

### 2.5 Bordas

| Token | Dark | Light | Uso |
|-------|------|-------|-----|
| `--snt-bd-1` | `rgba(245,244,237,.05)` | `rgba(26,23,20,.05)` | Sutil, quase invisível |
| `--snt-bd-2` | `rgba(245,244,237,.09)` | `rgba(26,23,20,.09)` | Padrão — cards e painéis |
| `--snt-bd-3` | `rgba(245,244,237,.16)` | `rgba(26,23,20,.16)` | Forte — separadores |
| `--snt-bd-a` | `rgba(201,100,66,.36)` | `rgba(201,100,66,.40)` | Accent — foco e hover ativo |

### 2.6 Semânticas

| Token | Dark | Light | Uso |
|-------|------|-------|-----|
| `--snt-success` | `#5ECF8A` | `#2E8A55` | Confirmações |
| `--snt-warning` | `#D4914A` | `#9A6020` | Alertas |
| `--snt-danger` | `#E06060` | `#B03030` | Erros, exclusão |

### 2.7 Regras absolutas

- ❌ Nunca use cinza frio ou azul em superfícies — qualquer neutro deve ter undertone oliva
- ❌ Nunca use branco puro `#FFFFFF` como canvas no light — use `#F5F0E8`
- ❌ Nunca adicione uma segunda cor de accent — o terracotta é o único ponto cromático
- ✅ Gradientes só dentro da família terracotta: `#C96442 → #D97757 → #E8A87C`

---

## 3. Tipografia

### 3.1 Famílias

| Papel | Família | Pesos | Google Fonts |
|-------|---------|-------|--------------|
| **Display / UI** | Manrope | 200, 300, 400, 500 | `family=Manrope:wght@200;300;400;500` |
| **Técnico / Código** | Fragment Mono | 400 | `family=Fragment+Mono` |

```html
<!-- CDN: copie no <head> de todos os projetos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Manrope:wght@200;300;400;500&display=swap" rel="stylesheet">
```

### 3.2 Escala Tipográfica

| Token | Tamanho | Peso | Line Height | Letter Spacing | Uso |
|-------|---------|------|-------------|----------------|-----|
| `--snt-type-d1` | `96px / 6rem` | 200 | 0.88 | -0.03em | Hero máximo — uma palavra, impacto total |
| `--snt-type-d2` | `72px / 4.5rem` | 200 | 0.90 | -0.02em | Displays secundários |
| `--snt-type-h1` | `48px / 3rem` | 300 | 1.0 | -0.015em | Títulos de página |
| `--snt-type-h2` | `36px / 2.25rem` | 300 | 1.1 | -0.01em | Títulos de seção |
| `--snt-type-h3` | `28px / 1.75rem` | 300 | 1.2 | -0.005em | Sub-seções, títulos de painel |
| `--snt-type-h4` | `22px / 1.375rem` | 400 | 1.3 | 0 | Títulos de card |
| `--snt-type-body-lg` | `18px / 1.125rem` | 400 | 1.6 | 0 | Parágrafos de intro |
| `--snt-type-body` | `15px / 0.9375rem` | 400 | 1.6 | 0 | Texto padrão |
| `--snt-type-body-sm` | `13px / 0.8125rem` | 400 | 1.5 | 0 | Texto compacto |
| `--snt-type-caption` | `12px / 0.75rem` | 400 | 1.4 | 0 | Metadados, datas |
| `--snt-type-label` | `11px / 0.6875rem` | 500 | 1.0 | 0.08em | Labels em UPPERCASE |
| `--snt-type-overline` | `10px / 0.625rem` | 500 | 1.0 | 0.12em | Overlines, categorias |
| `--snt-type-code` | `13px / 0.8125rem` | 400 | 1.6 | -0.01em | Fragment Mono — código e metadados técnicos |

### 3.3 Regras absolutas

- ❌ Nunca use peso acima de 500 — bold está proibido no sistema
- ❌ Nunca use Fragment Mono para conteúdo — apenas para labels técnicos, badges, código e metadados
- ✅ Hierarquia é criada por **tamanho e opacidade** — não por peso
- ✅ Letter-spacing negativo em títulos grandes (-0.02 a -0.03em) — dá o aspecto premium
- ✅ Letter-spacing positivo em labels uppercase (0.08–0.20em) — mantém legibilidade

---

## 4. Tokens Base

### 4.1 Espaçamento — Grid de 4px

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--snt-space-1` | `4px` | Gap mínimo, ícones internos |
| `--snt-space-2` | `8px` | Gaps entre elementos inline |
| `--snt-space-3` | `12px` | Padding de badges e labels |
| `--snt-space-4` | `16px` | Padding padrão |
| `--snt-space-5` | `20px` | Padding de botões |
| `--snt-space-6` | `24px` | Gap entre grupos |
| `--snt-space-8` | `32px` | Padding interno de cards |
| `--snt-space-10` | `40px` | Seções internas |
| `--snt-space-12` | `48px` | Entre seções |
| `--snt-space-16` | `64px` | Padding de página |
| `--snt-space-20` | `80px` | Seções maiores |
| `--snt-space-24` | `96px` | Espaço hero |

### 4.2 Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--snt-r-none` | `0px` | Elementos arquitetônicos, dividers |
| `--snt-r-xs` | `2px` | Badges, tags inline |
| `--snt-r-sm` | `4px` | **Padrão do sistema** — botões, inputs, cards |
| `--snt-r-md` | `8px` | Cards destacados, modais |
| `--snt-r-lg` | `16px` | Hero containers |
| `--snt-r-full` | `9999px` | Pills, avatars |

> ★ `r-sm` (4px) é o padrão. A maioria dos componentes usa 4px ou 0px — o sistema é quadrado por intenção.

### 4.3 Sombras e Elevação

| Token | Valor | Uso |
|-------|-------|-----|
| `--snt-sh-sm` | `0 2px 8px rgba(0,0,0,.4)` | Cards leves |
| `--snt-sh-md` | `0 4px 20px rgba(0,0,0,.55)` | Cards elevados, dropdowns |
| `--snt-sh-lg` | `0 12px 48px rgba(0,0,0,.70)` | Modais |
| `--snt-sh-glow` | `0 0 32px rgba(201,100,66,.18)` | **Glow accent** — hover de destaque |
| `--snt-sh-glow-lg` | `0 0 64px rgba(201,100,66,.12)` | Glow ambiente em heroes |
| `--snt-ring` | `0 0 0 2px rgba(201,100,66,.32)` | Focus ring — acessibilidade |

### 4.4 Transições — Spring Premium

| Token | Valor | Uso |
|-------|-------|-----|
| `--snt-ease` | `200ms cubic-bezier(.16,1,.3,1)` | Micro-interações, hover, foco |
| `--snt-ease-md` | `350ms cubic-bezier(.16,1,.3,1)` | Entradas de elementos |
| `--snt-ease-lg` | `500ms cubic-bezier(.16,1,.3,1)` | Transições de página, modais |
| `--snt-ease-slow` | `800ms cubic-bezier(.16,1,.3,1)` | Glow atmosférico, shimmer, ambient |

> O easing `cubic-bezier(.16,1,.3,1)` é um spring suave — começa rápido, termina com desaceleração natural. Usado por Linear e Vercel.

---

## 5. Sistema de Animações

### 5.1 Shimmer Border (AI-era signature)

Gradiente cônico rotacionando na borda — o efeito que mais remete ao momento atual de IA. Aplicado em cards de destaque e elementos em estado ativo.

```css
/* Requer @property para animação suave */
@property --snt-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.shimmer-border {
  position: relative;
}

.shimmer-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: conic-gradient(
    from var(--snt-angle),
    transparent 0%,
    #C96442 20%,
    #D97757 40%,
    transparent 60%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: snt-spin-border 3s linear infinite;
}

@keyframes snt-spin-border {
  to { --snt-angle: 360deg; }
}

/* Variante: só no hover */
.shimmer-border-hover::before {
  opacity: 0;
  animation: none;
  transition: opacity var(--snt-ease-md);
}
.shimmer-border-hover:hover::before {
  opacity: 1;
  animation: snt-spin-border 3s linear infinite;
}
```

### 5.2 Glow Pulse

Respiração suave em elementos ativos — comunica "o sistema está vivo e processando".

```css
.glow-pulse {
  animation: snt-glow-pulse 2.5s ease-in-out infinite;
}

@keyframes snt-glow-pulse {
  0%, 100% {
    box-shadow: 0 0 0 rgba(201, 100, 66, 0);
  }
  50% {
    box-shadow: 0 0 24px rgba(201, 100, 66, 0.35);
  }
}

/* Badge de status pulsando */
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C96442;
  animation: snt-blink 1.5s ease-in-out infinite;
}

@keyframes snt-blink {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 1; }
}
```

### 5.3 Fade Up (entrada em cascata)

```css
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s cubic-bezier(.16,1,.3,1),
    transform 0.6s cubic-bezier(.16,1,.3,1);
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Delay escalonado para filhos */
.fade-up:nth-child(2) { transition-delay: 0.1s; }
.fade-up:nth-child(3) { transition-delay: 0.2s; }
.fade-up:nth-child(4) { transition-delay: 0.3s; }
```

```js
// Trigger com IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-fade-group]')
  .forEach(el => observer.observe(el));
```

### 5.4 Magnetic Hover (3D tilt)

Cards inclinam em 3D seguindo a posição do cursor.

```js
function initMagnetic(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform =
        `rotateY(${dx * 12}deg) rotateX(${-dy * 12}deg) scale(1.02)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
      card.style.transition = 'transform 0.6s cubic-bezier(.16,1,.3,1)';
    });
  });
}

// Uso
initMagnetic('.magnetic-card');
```

```css
.magnetic-card {
  transform-style: preserve-3d;
  will-change: transform;
  transition: box-shadow var(--snt-ease-md);
}
.magnetic-card:hover {
  box-shadow: var(--snt-sh-glow);
}
```

### 5.5 Skeleton Loading (warm shimmer)

```css
.skeleton {
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    var(--snt-bg-2) 0%,
    var(--snt-bg-4) 40%,
    var(--snt-bg-2) 80%
  );
  background-size: 600px 100%;
  animation: snt-skeleton 1.8s ease-in-out infinite;
}

@keyframes snt-skeleton {
  0%   { background-position: -200px 0; }
  100% { background-position: 400px 0; }
}
```

### 5.6 Text Reveal (por caractere)

```js
function textReveal(element, text, options = {}) {
  const { delay = 0, charDelay = 0.04 } = options;
  element.innerHTML = '';

  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.style.cssText = `
      display: inline-block;
      overflow: hidden;
      vertical-align: bottom;
    `;
    const inner = document.createElement('span');
    inner.textContent = char === ' ' ? '\u00A0' : char;
    inner.style.cssText = `
      display: inline-block;
      transform: translateY(100%);
      opacity: 0;
      animation: snt-char-up 0.7s cubic-bezier(.16,1,.3,1) ${delay + i * charDelay}s forwards;
    `;
    span.appendChild(inner);
    element.appendChild(span);
  });
}

// CSS necessário
```

```css
@keyframes snt-char-up {
  to { transform: translateY(0); opacity: 1; }
}
```

### 5.7 Cursor Glow Global

```js
// Adicione no <body> e inicialize
const cursorGlow = document.createElement('div');
cursorGlow.id = 'snt-cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});
```

```css
#snt-cursor-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(201, 100, 66, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: opacity 0.4s;
}
```

---

## 6. Componentes

### 6.1 Botões

**Variantes e CSS:**

```css
.snt-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Fragment Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: var(--snt-r-sm);
  transition: all var(--snt-ease);
  position: relative;
  overflow: hidden;
}

/* Shimmer sweep no hover — todos os botões */
.snt-btn::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
  transition: left 0.5s;
}
.snt-btn:hover::after { left: 130%; }

/* Primary */
.snt-btn-primary {
  background: #C96442;
  color: #fff;
}
.snt-btn-primary:hover {
  background: #D97757;
  box-shadow: 0 0 24px rgba(201,100,66,.35);
  transform: translateY(-1px);
}

/* Secondary */
.snt-btn-secondary {
  background: var(--snt-bg-3);
  color: var(--snt-tx-1);
  border: 1px solid var(--snt-bd-2);
}
.snt-btn-secondary:hover {
  border-color: var(--snt-bd-3);
  transform: translateY(-1px);
}

/* Ghost */
.snt-btn-ghost {
  background: none;
  color: var(--snt-tx-2);
  border: 1px solid var(--snt-bd-2);
}
.snt-btn-ghost:hover {
  color: var(--snt-tx-1);
  border-color: var(--snt-bd-a);
  background: rgba(201,100,66,.04);
}

/* Destructive */
.snt-btn-destructive {
  background: rgba(180,50,50,.15);
  color: #e06060;
  border: 1px solid rgba(180,50,50,.25);
}
.snt-btn-destructive:hover {
  background: rgba(180,50,50,.25);
  transform: translateY(-1px);
}

/* Disabled */
.snt-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none !important;
}
```

### 6.2 Inputs

```css
.snt-input {
  background: var(--snt-bg-2);
  border: 1px solid var(--snt-bd-2);
  color: var(--snt-tx-1);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 300;
  padding: 12px 16px;
  border-radius: var(--snt-r-sm);
  outline: none;
  transition: all var(--snt-ease);
  width: 100%;
}
.snt-input::placeholder { color: var(--snt-tx-4); }
.snt-input:focus {
  border-color: #C96442;
  box-shadow: 0 0 0 3px rgba(201,100,66,.12);
}
.snt-input.error {
  border-color: rgba(180,60,60,.5);
}
.snt-input.error:focus {
  box-shadow: 0 0 0 3px rgba(180,60,60,.10);
}

.snt-label {
  font-family: 'Fragment Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--snt-tx-3);
  display: block;
  margin-bottom: 6px;
}

.snt-hint {
  font-family: 'Fragment Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--snt-tx-4);
  margin-top: 6px;
}
.snt-hint.error { color: #e06060; }
```

### 6.3 Cards

```css
/* Default */
.snt-card {
  background: var(--snt-bg-2);
  border: 1px solid var(--snt-bd-2);
  border-radius: var(--snt-r-sm);
  padding: 28px;
  transition: all var(--snt-ease-md);
}
.snt-card:hover {
  box-shadow: var(--snt-sh-md);
  border-color: var(--snt-bd-3);
}

/* Glow variant */
.snt-card-glow:hover {
  box-shadow: var(--snt-sh-glow);
  border-color: rgba(201,100,66,.25);
}

/* Card tag */
.snt-card-tag {
  font-family: 'Fragment Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #C96442;
  background: rgba(201,100,66,.08);
  border: 1px solid rgba(201,100,66,.20);
  padding: 3px 8px;
  border-radius: 2px;
  display: inline-block;
  margin-bottom: 16px;
}

/* Card footer */
.snt-card-footer {
  padding-top: 14px;
  border-top: 1px solid var(--snt-bd-2);
  font-family: 'Fragment Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--snt-tx-3);
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
```

### 6.4 Badges & Tags

```css
/* Badge base */
.snt-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Fragment Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid;
}

.snt-badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Variantes */
.snt-badge-active  { color: #5ECF8A; border-color: rgba(94,207,138,.3); background: rgba(94,207,138,.08); }
.snt-badge-warn    { color: #D4914A; border-color: rgba(212,145,74,.3); background: rgba(212,145,74,.08); }
.snt-badge-error   { color: #E06060; border-color: rgba(224,96,96,.3);  background: rgba(224,96,96,.08); }
.snt-badge-neutral { color: var(--snt-tx-3); border-color: var(--snt-bd-2); background: var(--snt-bg-3); }
.snt-badge-accent  { color: #C96442; border-color: rgba(201,100,66,.3); background: rgba(201,100,66,.08); }

/* Tag */
.snt-tag {
  display: inline-flex;
  align-items: center;
  font-family: 'Fragment Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 10px;
  border-radius: 2px;
}
.snt-tag-outlined { border: 1px solid var(--snt-bd-2); color: var(--snt-tx-2); }
.snt-tag-filled   { background: var(--snt-bg-3); color: var(--snt-tx-2); border: 1px solid var(--snt-bd-2); }
.snt-tag-accent   { background: rgba(201,100,66,.1); color: #C96442; border: 1px solid rgba(201,100,66,.25); }
```

### 6.5 Toasts / Alertas

```css
.snt-toast {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  border-radius: var(--snt-r-sm);
  border: 1px solid;
  animation: snt-slide-in 0.4s cubic-bezier(.16,1,.3,1);
}

@keyframes snt-slide-in {
  from { transform: translateX(20px); opacity: 0; }
}

.snt-toast-success { background: rgba(94,207,138,.06); border-color: rgba(94,207,138,.2); color: #5ECF8A; }
.snt-toast-warn    { background: rgba(212,145,74,.06); border-color: rgba(212,145,74,.2); color: #D4914A; }
.snt-toast-error   { background: rgba(224,96,96,.06);  border-color: rgba(224,96,96,.2);  color: #E06060; }
.snt-toast-info    { background: rgba(201,100,66,.06); border-color: rgba(201,100,66,.2); color: #C96442; }
```

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BLOCO II — CSS TOKENS
# Arquivo central. Copie como
# sunter-tokens.css e importe em
# qualquer projeto.
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 7. sunter-tokens.css

```css
/* ════════════════════════════════════════════════════
   SUNTER DESIGN SYSTEM — TOKENS v3.0 "Warm Intelligence"
   Sunter Tecnologia · sunter.com.br · 2026
   ════════════════════════════════════════════════════ */

/* ── @property para animações avançadas ── */
@property --snt-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

/* ── TIPOGRAFIA ── */
:root {
  --snt-font-sans: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
  --snt-font-mono: 'Fragment Mono', 'Courier New', monospace;
}

/* ── ESPAÇAMENTO ── */
:root {
  --snt-space-1:  4px;
  --snt-space-2:  8px;
  --snt-space-3:  12px;
  --snt-space-4:  16px;
  --snt-space-5:  20px;
  --snt-space-6:  24px;
  --snt-space-8:  32px;
  --snt-space-10: 40px;
  --snt-space-12: 48px;
  --snt-space-16: 64px;
  --snt-space-20: 80px;
  --snt-space-24: 96px;
}

/* ── BORDER RADIUS ── */
:root {
  --snt-r-none: 0px;
  --snt-r-xs:   2px;
  --snt-r-sm:   4px;
  --snt-r-md:   8px;
  --snt-r-lg:   16px;
  --snt-r-full: 9999px;
}

/* ── EASING ── */
:root {
  --snt-ease:      200ms cubic-bezier(.16,1,.3,1);
  --snt-ease-md:   350ms cubic-bezier(.16,1,.3,1);
  --snt-ease-lg:   500ms cubic-bezier(.16,1,.3,1);
  --snt-ease-slow: 800ms cubic-bezier(.16,1,.3,1);
}

/* ── ACCENT (igual nos dois modos) ── */
:root {
  --snt-accent:       #C96442;
  --snt-accent-warm:  #D97757;
  --snt-accent-light: #E8A87C;
  --snt-accent-glow:  rgba(201,100,66,.18);
}

/* ── SEMÂNTICAS ── */
:root {
  --snt-success: #5ECF8A;
  --snt-warning: #D4914A;
  --snt-danger:  #E06060;
}

/* ════════════════════════════════════════
   DARK MODE (padrão)
   ════════════════════════════════════════ */
:root,
[data-theme="dark"] {
  /* Backgrounds */
  --snt-bg-0: #0A0908;
  --snt-bg-1: #13120F;
  --snt-bg-2: #1C1A16;
  --snt-bg-3: #26231E;
  --snt-bg-4: #302D27;
  --snt-bg-5: #3D3930;

  /* Texto */
  --snt-tx-1: #F5F4ED;
  --snt-tx-2: #B0AEA5;
  --snt-tx-3: #87867F;
  --snt-tx-4: #5E5D59;

  /* Bordas */
  --snt-bd-1: rgba(245,244,237,.05);
  --snt-bd-2: rgba(245,244,237,.09);
  --snt-bd-3: rgba(245,244,237,.16);
  --snt-bd-a: rgba(201,100,66,.36);

  /* Sombras */
  --snt-sh-sm:      0 2px 8px rgba(0,0,0,.4);
  --snt-sh-md:      0 4px 20px rgba(0,0,0,.55);
  --snt-sh-lg:      0 12px 48px rgba(0,0,0,.70);
  --snt-sh-glow:    0 0 32px rgba(201,100,66,.18);
  --snt-sh-glow-lg: 0 0 64px rgba(201,100,66,.12);
  --snt-ring:       0 0 0 2px rgba(201,100,66,.32);

  /* Skeleton */
  --snt-sk-a: #1C1A16;
  --snt-sk-b: #302D27;
}

/* ════════════════════════════════════════
   LIGHT MODE
   ════════════════════════════════════════ */
[data-theme="light"] {
  /* Backgrounds */
  --snt-bg-0: #F5F0E8;
  --snt-bg-1: #EDE8DF;
  --snt-bg-2: #FFFFFF;
  --snt-bg-3: #FBF8F3;
  --snt-bg-4: #F0EBE3;
  --snt-bg-5: #E8E1D7;

  /* Texto */
  --snt-tx-1: #1A1714;
  --snt-tx-2: #4A4540;
  --snt-tx-3: #7A756E;
  --snt-tx-4: #B0A89E;

  /* Bordas */
  --snt-bd-1: rgba(26,23,20,.05);
  --snt-bd-2: rgba(26,23,20,.09);
  --snt-bd-3: rgba(26,23,20,.16);
  --snt-bd-a: rgba(201,100,66,.40);

  /* Sombras */
  --snt-sh-sm:      0 2px 8px rgba(0,0,0,.06);
  --snt-sh-md:      0 4px 20px rgba(0,0,0,.08);
  --snt-sh-lg:      0 12px 48px rgba(0,0,0,.12);
  --snt-sh-glow:    0 0 32px rgba(201,100,66,.14);
  --snt-sh-glow-lg: 0 0 64px rgba(201,100,66,.08);
  --snt-ring:       0 0 0 2px rgba(201,100,66,.28);

  /* Skeleton */
  --snt-sk-a: #F0EBE3;
  --snt-sk-b: #E8E1D7;

  /* Semânticas ajustadas para light */
  --snt-success: #2E8A55;
  --snt-warning: #9A6020;
  --snt-danger:  #B03030;
}
```

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BLOCO III — IMPLEMENTAÇÃO ANGULAR
# Para projetos Angular com ou sem PrimeNG
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 8. Setup Angular

### 8.1 Importar tokens

No `styles.scss` global do projeto:

```scss
// styles.scss
@import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Manrope:wght@200;300;400;500&display=swap');
@import 'sunter-tokens.css'; // copie o arquivo do Bloco II

* {
  box-sizing: border-box;
}

body {
  background: var(--snt-bg-0);
  color: var(--snt-tx-1);
  font-family: var(--snt-font-sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  margin: 0;
}
```

### 8.2 Theme service (dark/light toggle)

```typescript
// theme.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'dark' | 'light'>('dark');

  toggle() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('snt-theme', next);
  }

  init() {
    const saved = localStorage.getItem('snt-theme') as 'dark' | 'light' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light' : 'dark';
    const theme = saved ?? preferred;
    this.theme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}
```

```typescript
// app.component.ts
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}
  ngOnInit() { this.themeService.init(); }
}
```

### 8.3 Botão component

```typescript
// snt-button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'snt-button',
  standalone: true,
  template: `
    <button
      class="snt-btn"
      [class]="'snt-btn-' + variant"
      [class.snt-btn-loading]="loading"
      [disabled]="disabled || loading"
    >
      <span *ngIf="loading" class="snt-spinner"></span>
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .snt-btn {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: var(--snt-font-mono); font-size: 10px;
      text-transform: uppercase; letter-spacing: 0.15em;
      padding: 12px 24px; border: none; cursor: pointer;
      border-radius: var(--snt-r-sm);
      transition: all var(--snt-ease);
      position: relative; overflow: hidden;
    }
    .snt-btn::after {
      content: ''; position: absolute;
      top: 0; left: -100%; width: 60%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
      transition: left 0.5s;
    }
    .snt-btn:hover::after { left: 130%; }
    .snt-btn-primary { background: var(--snt-accent); color: #fff; }
    .snt-btn-primary:hover { background: var(--snt-accent-warm); box-shadow: var(--snt-sh-glow); transform: translateY(-1px); }
    .snt-btn-secondary { background: var(--snt-bg-3); color: var(--snt-tx-1); border: 1px solid var(--snt-bd-2); }
    .snt-btn-ghost { background: none; color: var(--snt-tx-2); border: 1px solid var(--snt-bd-2); }
    .snt-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none !important; }
    .snt-spinner {
      width: 12px; height: 12px;
      border: 1.5px solid rgba(255,255,255,.3);
      border-top-color: #fff; border-radius: 50%;
      animation: spin .7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class SntButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'destructive' = 'primary';
  @Input() loading = false;
  @Input() disabled = false;
}
```

### 8.4 Card component com shimmer border

```typescript
// snt-card.component.ts
@Component({
  selector: 'snt-card',
  standalone: true,
  template: `
    <div class="snt-card" [class.shimmer]="shimmer" [class.glow]="glow">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .snt-card {
      background: var(--snt-bg-2);
      border: 1px solid var(--snt-bd-2);
      border-radius: var(--snt-r-sm);
      padding: 28px;
      transition: all var(--snt-ease-md);
    }
    .snt-card:hover { box-shadow: var(--snt-sh-md); border-color: var(--snt-bd-3); }
    .snt-card.glow:hover { box-shadow: var(--snt-sh-glow); border-color: rgba(201,100,66,.25); }

    /* Shimmer border */
    .snt-card.shimmer { position: relative; border: none; }
    .snt-card.shimmer::before {
      content: ''; position: absolute; inset: 0;
      border-radius: var(--snt-r-sm); padding: 1px;
      background: conic-gradient(from var(--snt-angle), transparent 0%, #C96442 20%, #D97757 40%, transparent 60%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      animation: spin-border 3s linear infinite;
    }
    @keyframes spin-border { to { --snt-angle: 360deg; } }
  `]
})
export class SntCardComponent {
  @Input() shimmer = false;
  @Input() glow = false;
}
```

### 8.5 PrimeNG — override de tema

```scss
// No arquivo de tema do PrimeNG (theme.scss)
:root {
  --primary-color: #C96442;
  --primary-color-text: #ffffff;
  --highlight-bg: rgba(201,100,66,.12);
  --highlight-text-color: #C96442;
  --focus-ring: 0 0 0 2px rgba(201,100,66,.32);

  // Superfícies
  --surface-ground: var(--snt-bg-0);
  --surface-section: var(--snt-bg-1);
  --surface-card: var(--snt-bg-2);
  --surface-overlay: var(--snt-bg-3);
  --surface-border: var(--snt-bd-2);
  --surface-hover: var(--snt-bg-4);

  // Texto
  --text-color: var(--snt-tx-1);
  --text-color-secondary: var(--snt-tx-2);

  // Inputs
  --input-bg: var(--snt-bg-2);
  --input-border: var(--snt-bd-2);
  --input-hover-border-color: var(--snt-bd-3);
  --input-focus-border-color: #C96442;

  // Border radius
  --border-radius: var(--snt-r-sm);

  // Font
  --font-family: var(--snt-font-sans);
}
```

### 8.6 Fade Up Directive

```typescript
// fade-up.directive.ts
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[sntFadeUp]', standalone: true })
export class FadeUpDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(.16,1,.3,1), transform 0.6s cubic-bezier(.16,1,.3,1)';

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(el);
  }
}

// Uso no template:
// <div sntFadeUp>Conteúdo que aparece ao scrollar</div>
```

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# BLOCO IV — IMPLEMENTAÇÃO REACT + TAILWIND
# Para sites, landing pages e apps React
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 9. Setup React + Tailwind

### 9.1 tailwind.config.js

```js
// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        mono: ['Fragment Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        snt: {
          // Accent (invariável)
          accent:  '#C96442',
          coral:   '#D97757',
          light:   '#E8A87C',

          // Dark mode backgrounds
          base:    '#0A0908',
          800:     '#13120F',
          700:     '#1C1A16',
          600:     '#26231E',
          500:     '#302D27',
          400:     '#3D3930',

          // Dark mode text
          tx1:     '#F5F4ED',
          tx2:     '#B0AEA5',
          tx3:     '#87867F',
          tx4:     '#5E5D59',

          // Light mode backgrounds
          'l-base': '#F5F0E8',
          'l-800':  '#EDE8DF',
          'l-700':  '#FFFFFF',
          'l-600':  '#FBF8F3',
          'l-500':  '#F0EBE3',

          // Light mode text
          'l-tx1':  '#1A1714',
          'l-tx2':  '#4A4540',
          'l-tx3':  '#7A756E',
          'l-tx4':  '#B0A89E',

          // Semantic
          success: '#5ECF8A',
          warning: '#D4914A',
          danger:  '#E06060',
        }
      },
      borderRadius: {
        'snt':    '4px',
        'snt-md': '8px',
        'snt-lg': '16px',
      },
      boxShadow: {
        'snt-sm':      '0 2px 8px rgba(0,0,0,.4)',
        'snt-md':      '0 4px 20px rgba(0,0,0,.55)',
        'snt-lg':      '0 12px 48px rgba(0,0,0,.7)',
        'snt-glow':    '0 0 32px rgba(201,100,66,.18)',
        'snt-glow-lg': '0 0 64px rgba(201,100,66,.12)',
        'snt-ring':    '0 0 0 2px rgba(201,100,66,.32)',
      },
      transitionTimingFunction: {
        'snt': 'cubic-bezier(.16,1,.3,1)',
      },
      transitionDuration: {
        'snt':      '200ms',
        'snt-md':   '350ms',
        'snt-lg':   '500ms',
        'snt-slow': '800ms',
      },
      animation: {
        'snt-glow':     'sntGlow 2.5s ease-in-out infinite',
        'snt-blink':    'sntBlink 1.5s ease-in-out infinite',
        'snt-skeleton': 'sntSkeleton 1.8s ease-in-out infinite',
        'snt-spin':     'spin 3s linear infinite',
      },
      keyframes: {
        sntGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(201,100,66,0)' },
          '50%':       { boxShadow: '0 0 24px rgba(201,100,66,.35)' },
        },
        sntBlink: {
          '0%, 100%': { opacity: '0.4' },
          '50%':       { opacity: '1' },
        },
        sntSkeleton: {
          '0%':   { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
    }
  },
  plugins: [],
}
```

### 9.2 globals.css

```css
/* globals.css ou app.css */
@import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Manrope:wght@200;300;400;500&display=swap');

/* Importe o sunter-tokens.css aqui também */
@import './sunter-tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans font-light antialiased;
    background: var(--snt-bg-0);
    color: var(--snt-tx-1);
  }

  /* Shimmer border utility */
  @property --snt-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
}

@layer utilities {
  .shimmer-border {
    position: relative;
  }
  .shimmer-border::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: inherit; padding: 1px;
    background: conic-gradient(from var(--snt-angle), transparent 0%, #C96442 20%, #D97757 40%, transparent 60%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    animation: spin 3s linear infinite;
  }

  .skeleton-warm {
    background: linear-gradient(90deg, var(--snt-sk-a) 0%, var(--snt-sk-b) 40%, var(--snt-sk-a) 80%);
    background-size: 600px 100%;
    animation: sntSkeleton 1.8s ease-in-out infinite;
  }
}
```

### 9.3 Componentes React

**Button:**

```tsx
// components/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  loading?: boolean
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:     'bg-snt-accent hover:bg-snt-coral text-white hover:shadow-snt-glow hover:-translate-y-px',
  secondary:   'bg-snt-600 text-snt-tx1 border border-snt-bd-2 hover:border-snt-bd-3 hover:-translate-y-px',
  ghost:       'bg-transparent text-snt-tx2 border border-snt-bd-2 hover:text-snt-tx1 hover:border-snt-bd-a',
  destructive: 'bg-red-900/20 text-red-400 border border-red-900/30 hover:bg-red-900/30 hover:-translate-y-px',
}

export function Button({ variant = 'primary', loading, children, className, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center gap-2 overflow-hidden',
        'font-mono text-[10px] uppercase tracking-[0.15em]',
        'px-6 py-3 rounded-snt transition-all duration-snt ease-snt',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none',
        // shimmer sweep
        'after:content-[""] after:absolute after:top-0 after:-left-full after:w-[60%] after:h-full',
        'after:bg-gradient-to-r after:from-transparent after:via-white/[0.08] after:to-transparent',
        'after:transition-[left] after:duration-500 hover:after:left-[130%]',
        variants[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
```

**Card:**

```tsx
// components/Card.tsx
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  shimmer?: boolean
  glow?: boolean
  className?: string
}

export function Card({ children, shimmer, glow, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-snt p-7 transition-all duration-snt-md ease-snt',
        shimmer
          ? 'shimmer-border bg-snt-700'
          : 'bg-snt-700 border border-snt-bd-2 hover:border-snt-bd-3',
        glow && !shimmer && 'hover:shadow-snt-glow hover:border-snt-accent/25',
        !glow && !shimmer && 'hover:shadow-snt-md',
        className
      )}
    >
      {children}
    </div>
  )
}

// Sub-componentes
export function CardTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-mono text-[9px] uppercase tracking-[0.15em] text-snt-accent bg-snt-accent/10 border border-snt-accent/20 px-2 py-0.5 rounded-[2px] mb-4">
      {children}
    </span>
  )
}

export function CardFooter({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between pt-4 mt-4 border-t border-snt-bd-2 font-mono text-[9px] uppercase tracking-[0.12em] text-snt-tx3">
      {children}
    </div>
  )
}
```

**Badge:**

```tsx
// components/Badge.tsx
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'active' | 'warn' | 'error' | 'neutral' | 'accent'

const badgeStyles: Record<BadgeVariant, string> = {
  active:  'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  warn:    'text-amber-400   border-amber-400/30   bg-amber-400/10',
  error:   'text-red-400     border-red-400/30     bg-red-400/10',
  neutral: 'text-snt-tx3    border-snt-bd-2        bg-snt-600',
  accent:  'text-snt-accent  border-snt-accent/30  bg-snt-accent/10',
}

interface BadgeProps {
  variant?: BadgeVariant
  pulse?: boolean
  children: ReactNode
}

export function Badge({ variant = 'neutral', pulse, children }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em]',
      'px-2.5 py-1 rounded-full border',
      badgeStyles[variant]
    )}>
      <span className={cn(
        'w-1.5 h-1.5 rounded-full bg-current flex-shrink-0',
        pulse && 'animate-snt-blink'
      )} />
      {children}
    </span>
  )
}
```

**useTheme hook:**

```tsx
// hooks/useTheme.ts
import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('snt-theme') as 'dark' | 'light' | null
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light' : 'dark'
    const initial = saved ?? preferred
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('snt-theme', next)
  }

  return { theme, toggle }
}
```

**useFadeUp hook:**

```tsx
// hooks/useFadeUp.ts
import { useEffect, useRef } from 'react'

export function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms`

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      })
    }, { threshold: 0.2 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}

// Uso:
// const ref = useFadeUp(200) // 200ms delay
// <div ref={ref}>Conteúdo</div>
```

---

## 10. Checklist de implementação

Antes de qualquer entrega, verifique:

**Cores:**
- [ ] Nenhuma superfície usa cinza frio ou azul
- [ ] Canvas dark é `#0A0908`, canvas light é `#F5F0E8`
- [ ] Único accent cromático é `#C96442` / `#D97757`
- [ ] Bordas são sempre 1px com as variantes `bd-1/2/3/a`

**Tipografia:**
- [ ] Nenhum peso acima de 500 em qualquer texto
- [ ] Fragment Mono apenas em labels técnicos, badges, código e metadados
- [ ] Letter-spacing negativo em títulos grandes
- [ ] Letter-spacing positivo em labels uppercase

**Animações:**
- [ ] Easing é sempre `cubic-bezier(.16,1,.3,1)` — nunca `ease` ou `linear` em interações de UI
- [ ] Hover de botões tem shimmer sweep
- [ ] Cards de destaque têm glow ou shimmer border
- [ ] Elementos que entram por scroll usam fade-up

**Acessibilidade:**
- [ ] Focus ring visível: `0 0 0 2px rgba(201,100,66,.32)`
- [ ] Contraste de texto validado nos dois modos
- [ ] Botões têm `aria-label` quando são apenas ícones
- [ ] Skeleton tem `aria-busy="true"` durante carregamento

---

*Sunter Design System v3.0 "Warm Intelligence" · Aprovado em 2026-04-07*
*Próxima revisão: quando houver mudança aprovada na identidade visual*
