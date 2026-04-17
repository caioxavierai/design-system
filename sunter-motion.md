# Sunter Motion System
> Versão 1.0 · Referência criada a partir de home-v3.html · 2026
>
> Todos os tokens referenciados aqui estão em `sunter-tokens.css` sob o bloco `/* ── MOTION ── */`.

---

## Princípios

- **Spring, não linear.** O easing padrão do sistema é `cubic-bezier(.16, 1, .3, 1)` (`--snt-spring`). Ele simula física real com leve overshoot — oposto do `ease-in-out` genérico.
- **Stagger, não simultâneo.** Elementos irmãos nunca entram juntos. O delay mínimo entre filhos é `100ms`.
- **Direcional e intencional.** Cada elemento tem uma direção de entrada coerente com sua posição na página (baixo → cima, esquerda → direita, etc.).
- **Performance first.** Só `transform` e `opacity` são animados via CSS. Propriedades que causam layout/repaint (`height`, `width`, `top`, `left`) ficam fora de transições críticas.
- **Respeitar `prefers-reduced-motion`.** Todo efeito visual não-funcional deve ser desativado com `@media (prefers-reduced-motion: reduce)`.

---

## 01 · Scroll Progress Bar

**Quando usar:** em todas as páginas com scroll longo.

**Como funciona:** uma `div` fixada no topo com `width: 0%` que cresce via JS em tempo real.

```html
<div id="scroll-progress"></div>
```

```css
#scroll-progress {
    position: fixed; top: 0; left: 0; height: 2px;
    background: linear-gradient(90deg, var(--snt-accent), var(--snt-accent-warm));
    z-index: 1000; width: 0%;
    transition: width 0.05s linear;
    box-shadow: 0 0 8px rgba(201, 100, 66, 0.6);
}
```

```js
const progressBar = document.getElementById('scroll-progress');
function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / docHeight * 100) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
```

---

## 02 · Cursor Blob (Glow atmosférico)

**Quando usar:** em páginas dark. Só ativa em dispositivos com pointer fino (mouse), nunca em touch.

**Como funciona:** `div` circular com radial-gradient terracotta segue o cursor com lag via lerp (interpolação linear a cada frame).

```html
<div id="cursor-blob"></div>
```

```css
#cursor-blob {
    position: fixed; top: 0; left: 0;
    width: var(--snt-blob-size); height: var(--snt-blob-size); border-radius: 50%;
    background: radial-gradient(circle, rgba(201, 100, 66, 0.07) 0%, transparent 70%);
    pointer-events: none; z-index: 1;
    transform: translate(-50%, -50%);
    will-change: transform; display: none;
}
@media (pointer: fine) { #cursor-blob { display: block; } }
```

```js
const blob = document.getElementById('cursor-blob');
let blobX = 0, blobY = 0, curX = 0, curY = 0;
const LAG = 0.06; // var(--snt-blob-lag)

window.addEventListener('mousemove', e => { curX = e.clientX; curY = e.clientY; });

function animateBlob() {
    blobX += (curX - blobX) * LAG;
    blobY += (curY - blobY) * LAG;
    blob.style.left = blobX + 'px';
    blob.style.top  = blobY + 'px';
    requestAnimationFrame(animateBlob);
}
animateBlob();
```

---

## 03 · Canvas Particle Field

**Quando usar:** no hero de páginas de alto impacto (home, landing pages). Não usar em seções internas.

**Como funciona:** canvas HTML5 sobre o hero com 60 partículas autônomas. Partículas se conectam quando próximas. O mouse repele ao se aproximar.

```html
<canvas id="hero-canvas" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;"></canvas>
```

```js
// Tokens de referência: --snt-particle-count, --snt-particle-max-dist, --snt-particle-repulse, --snt-particle-damping
const PARTICLE_COUNT = 60;
const MAX_DIST = 140;       // conexão ativa abaixo dessa distância
const REPULSE_RADIUS = 100; // raio de repulsão pelo mouse
const DAMPING = 0.98;

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x  = Math.random() * W;
        this.y  = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r  = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
    }
    update() {
        const dx = this.x - mouseX, dy = this.y - mouseY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < REPULSE_RADIUS) {
            this.vx += (dx / dist) * 0.3;
            this.vy += (dy / dist) * 0.3;
        }
        this.vx *= DAMPING; this.vy *= DAMPING;
        this.x += this.vx; this.y += this.vy;
        // wrap nos limites
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(201,100,66,${this.alpha})`;
        ctx.fill();
    }
}

function drawFrame() {
    ctx.clearRect(0, 0, W, H);
    // conexões entre partículas próximas
    for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < MAX_DIST) {
                const alpha = (1 - dist/MAX_DIST) * 0.12;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(201,100,66,${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(drawFrame);
}
drawFrame();
```

---

## 04 · Word Split (entrada do H1)

**Quando usar:** no H1 principal de qualquer página. Nunca em subheadings ou corpo de texto.

**Como funciona:** o texto é dividido em palavras via JS, cada `<span>` recebe `transition-delay` crescente. A classe `.visible` dispara a transição de entrada.

```css
.split-word {
    display: inline-block;
    opacity: 0;
    transform: translateY(var(--snt-split-y)) rotateX(-15deg); /* --snt-split-y: 60px */
    transition:
        opacity  var(--snt-dur-enter) var(--snt-spring),
        transform var(--snt-dur-enter) var(--snt-spring);
    transform-origin: bottom center;
}
.split-word.visible {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
}
```

```js
const heroTitle = document.getElementById('hero-title');
const words = heroTitle.innerText.split(' ');
heroTitle.innerHTML = words.map((w, i) =>
    `<span class="split-word" style="transition-delay:${0.3 + i * 0.08}s">${w}</span>${i < words.length-1 ? ' ' : ''}`
).join('');

// Ativa após load:
document.querySelectorAll('.split-word').forEach(w => w.classList.add('visible'));
```

---

## 05 · Hero Entrance Sequence

**Quando usar:** na seção hero de qualquer página. Ordem: eyebrow → título → subtítulo → CTAs → micro-copy.

**Como funciona:** cada elemento tem `opacity: 0` e `transform: translateY(20px)` por padrão. Classe `.visible` aplica a transição. Delays são definidos diretamente no CSS de cada ID, não por JS.

```css
#hero-eyebrow {
    opacity: 0; transform: translateY(20px);
    transition: opacity 0.6s ease 0.1s, transform 0.6s var(--snt-spring) 0.1s;
}
#hero-sub {
    opacity: 0; transform: translateY(20px);
    transition: opacity 0.7s ease 0.8s, transform 0.7s var(--snt-spring) 0.8s;
}
#hero-ctas {
    opacity: 0; transform: translateY(20px);
    transition: opacity 0.7s ease 1.0s, transform 0.7s var(--snt-spring) 1.0s;
}
#hero-micro {
    opacity: 0;
    transition: opacity 0.7s ease 1.2s;
}
.visible { opacity: 1; transform: translateY(0); }
```

```js
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('hero-eyebrow').classList.add('visible');
        document.querySelectorAll('.split-word').forEach(w => w.classList.add('visible'));
        document.getElementById('hero-sub').classList.add('visible');
        document.getElementById('hero-ctas').classList.add('visible');
        document.getElementById('hero-micro').classList.add('visible');
    }, 100);
});
```

---

## 06 · Parallax no Scroll

**Quando usar:** só no hero. Nunca em seções internas — cria confusão visual.

**Como funciona:** ao rolar, hero-content sobe levemente e perde opacity. O glow de fundo se move em velocidade diferente (dissociação de camadas). Usa `requestAnimationFrame` com flag `ticking` para não sobrecarregar o scroll event.

```js
// Tokens: --snt-parallax-content (0.12), --snt-parallax-glow (0.20), --snt-parallax-fade-px (500)
const heroGlow    = document.getElementById('hero-glow');
const heroContent = document.getElementById('hero-content');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const y = window.scrollY;
            heroGlow.style.transform = `translate(-50%, calc(-50% + ${y * 0.20}px))`;
            heroContent.style.transform = `translateY(${y * 0.12}px)`;
            heroContent.style.opacity = Math.max(0, 1 - y / 500);
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });
```

---

## 07 · Reveal Variants (Scroll Reveal)

**Quando usar:** em qualquer elemento de conteúdo que entra na viewport — headings de seção, cards, textos. O padrão é `.reveal` (baixo → cima). Use `.reveal-left` e `.reveal-right` para pares opostos (ex: eyebrow + texto em grid).

```css
/* Base */
.reveal {
    opacity: 0; transform: translateY(var(--snt-reveal-y)); /* 36px */
    transition:
        opacity   var(--snt-dur-reveal) var(--snt-spring),
        transform var(--snt-dur-reveal) var(--snt-spring);
}
/* Lateral esquerda */
.reveal-left {
    opacity: 0; transform: translateX(calc(-1 * var(--snt-reveal-x))); /* -48px */
    transition:
        opacity   var(--snt-dur-reveal) var(--snt-spring),
        transform var(--snt-dur-reveal) var(--snt-spring);
}
/* Lateral direita */
.reveal-right {
    opacity: 0; transform: translateX(var(--snt-reveal-x)); /* 48px */
    transition:
        opacity   var(--snt-dur-reveal) var(--snt-spring),
        transform var(--snt-dur-reveal) var(--snt-spring);
}
/* Estado ativo */
.reveal.active, .reveal-left.active, .reveal-right.active {
    opacity: 1; transform: translate(0);
}
/* Stagger de filhos */
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }
.delay-400 { transition-delay: 400ms; }
.delay-500 { transition-delay: 500ms; }
```

```js
const allReveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('active');
            obs.unobserve(e.target); // dispara uma só vez
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

allReveal.forEach(el => revealObs.observe(el));
```

---

## 08 · Draw Lines

**Quando usar:** em separadores horizontais da seção de processo ou timeline. Cria a sensação de que a linha está sendo "desenhada" conforme o usuário rola.

**Como funciona:** a linha tem um pseudo-elemento `::after` com `width: 0%`. Ao entrar na viewport, a classe `.active` expande a largura via transição.

- `.draw-line` → fill parcial (25%) — sinaliza progresso
- `.draw-line-full` → fill total (100%) — linha completa

```css
.draw-line {
    position: relative; height: 1px;
    background: rgba(245, 244, 237, 0.09); /* --snt-bd-2 */
    overflow: hidden;
}
.draw-line::after {
    content: ''; position: absolute; left: 0; top: 0;
    height: 100%; width: 0%;
    background: var(--snt-accent);
    transition: width var(--snt-dur-slow) var(--snt-spring); /* 1200ms */
}
.draw-line.active::after      { width: 25%; }
.draw-line-full.active::after { width: 100%; }

/* Bonus: hover no processo-step força fill total */
.process-step:hover .draw-line::after { width: 100% !important; }
```

```js
const drawLines = document.querySelectorAll('.draw-line');
const lineObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
    });
}, { threshold: 0.5 });
drawLines.forEach(l => lineObs.observe(l));
```

---

## 09 · Animated Counters

**Quando usar:** em métricas de credibilidade ("+10 anos", "+150 projetos", etc.). Nunca em texto corrido.

**Como funciona:** o contador anima de 0 ao valor-alvo com easing ease-out cúbico ao entrar na viewport. Suporta prefixo (`+`) e sufixo (` dias`).

```html
<div class="data-counter" data-target="150" data-prefix="+">+0</div>
<div class="data-counter" data-target="60" data-suffix=" dias">0 dias</div>
```

```js
// Token: --snt-dur-counter: 2200ms · --snt-ease-out-c3: cubic-bezier(.22, 1, .36, 1)
const counters = document.querySelectorAll('.data-counter');
const countObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el       = entry.target;
        const target   = parseInt(el.getAttribute('data-target'));
        const prefix   = el.getAttribute('data-prefix') || '';
        const suffix   = el.getAttribute('data-suffix') || '';
        const duration = 2200;
        const start    = performance.now();

        function tick(now) {
            const p    = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3); // ease-out cúbico
            el.innerText = `${prefix}${Math.floor(ease * target)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
            else el.innerText = `${prefix}${target}${suffix}`;
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
    });
}, { threshold: 0.5 });
counters.forEach(c => countObs.observe(c));
```

---

## 10 · Magnetic Buttons

**Quando usar:** apenas nos CTAs primários (máximo 3 por página). O efeito perde sentido se aplicado a muitos elementos.

**Como funciona:** ao mover o mouse sobre o botão, calcula o delta entre cursor e centro do elemento e aplica um `translate` de 25% do delta. Saindo, retorna ao zero com spring.

```html
<a class="magnetic">Iniciar conversa</a>
```

```css
.magnetic {
    transition: transform 0.3s var(--snt-spring);
    display: inline-flex;
}
```

```js
// Token: --snt-magnetic-factor: 0.25
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
        const r  = el.getBoundingClientRect();
        const cx = r.left + r.width  / 2;
        const cy = r.top  + r.height / 2;
        const dx = (e.clientX - cx) * 0.25;
        const dy = (e.clientY - cy) * 0.25;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});
```

---

## Efeitos de Componente

### Shimmer Card
Usado em cards de serviço. Borda giratória em terracotta aparece no hover.
> Ver `sunter-tokens.css` → `.shimmer-border` e `.shimmer-border-hover`.

### Nav Link Underline
```css
.nav-link::after {
    content: ''; position: absolute; bottom: -4px; left: 0;
    width: 0%; height: 1px; background: var(--snt-accent);
    transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }
```

### Case Card Hover
```css
.case-card {
    transition: transform 0.4s var(--snt-spring), border-color 0.3s ease, box-shadow 0.4s ease;
}
.case-card:hover {
    transform: translateY(-6px);
    border-color: rgba(201, 100, 66, 0.3);
    box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,100,66,0.1);
}
```

### Process Number Color
```css
.process-num {
    color: rgba(201, 100, 66, 0.15);
    transition: color 0.5s ease;
}
.process-step:hover .process-num { color: rgba(201, 100, 66, 0.6); }
```

### Floating Orbs (Hero)
Apenas desktop (`hidden lg:block`). Três esferas com `border: 1px solid rgba(201,100,66,0.15)` flutuando com keyframes diferentes.
```css
@keyframes float-a { 0%,100% { transform: translateY(0) translateX(0); } 33% { transform: translateY(-18px) translateX(8px); } 66% { transform: translateY(-8px) translateX(-6px); } }
@keyframes float-b { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-24px) rotate(8deg); } }
@keyframes float-c { 0%,100% { transform: translateY(0) translateX(0); } 40% { transform: translateY(14px) translateX(-10px); } 80% { transform: translateY(-10px) translateX(5px); } }
```

---

## Ambient Backgrounds (v4)

Camadas visuais que ficam em segundo plano, em movimento lento e contínuo. Criam profundidade e sensação de tecnologia sem competir com o conteúdo. Todos os elementos têm `pointer-events: none` e `aria-hidden="true"`.

**Regra de ouro:** qualquer seção que receba um ambient background precisa ter `position: relative` e `overflow: hidden`.

---

### A · Morphing Gradient Blob

**O que é:** esfera com gradiente radial terracotta, filter blur alto, drift lento via keyframe.

**Quando usar:** seções de conteúdo denso (problema/solução, anti-objeções, footer). Máximo 2 blobs por seção. Posicionar nos cantos, nunca no centro — não deve competir com texto.

**Opacidade guia:** blob principal `0.06–0.08`, blob secundário `0.04–0.05`.

```css
.ambient-blob {
    position: absolute; border-radius: 50%;
    pointer-events: none; filter: blur(90px);
    will-change: transform;
}
@keyframes blob-drift-a {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%       { transform: translate(35px, -45px) scale(1.08); }
    66%       { transform: translate(-25px, 18px) scale(0.94); }
}
@keyframes blob-drift-b {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40%       { transform: translate(-45px, 28px) scale(1.12); }
    80%       { transform: translate(22px, -22px) scale(0.93); }
}
@keyframes blob-drift-c {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50%       { transform: translate(55px, 18px) scale(1.06); }
}
```

```html
<!-- Exemplo: 2 blobs em canto oposto -->
<div class="ambient-blob" style="width:500px;height:500px;top:-15%;right:-5%;background:radial-gradient(circle,rgba(201,100,66,0.07) 0%,transparent 70%);animation:blob-drift-a 18s ease-in-out infinite;" aria-hidden="true"></div>
<div class="ambient-blob" style="width:280px;height:280px;bottom:-8%;left:5%;background:radial-gradient(circle,rgba(201,100,66,0.05) 0%,transparent 70%);animation:blob-drift-b 22s ease-in-out infinite 4s;" aria-hidden="true"></div>
```

---

### B · Horizontal Flow Beams

**O que é:** traços horizontais de luz (gradiente linear) que passam da esquerda para direita em loop, em alturas variadas.

**Quando usar:** seções de métricas ou dados — reforça a ideia de dados em trânsito. Não usar em seções de texto longo.

**Quantidade:** 2–3 beams por seção. Variar duração e delay para evitar sincronia.

```css
.flow-beam {
    position: absolute; height: 1px; width: 80px;
    background: linear-gradient(90deg, transparent, rgba(201,100,66,0.35), transparent);
    pointer-events: none;
    animation: flow-right 4s ease-in-out infinite;
}
@keyframes flow-right {
    0%   { left: -10%; opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 0.6; }
    100% { left: 110%; opacity: 0; }
}
```

```html
<div aria-hidden="true">
    <div class="flow-beam" style="top:22%; animation-delay:0s; animation-duration:5s;"></div>
    <div class="flow-beam" style="top:50%; animation-delay:1.8s; animation-duration:6s;"></div>
    <div class="flow-beam" style="top:78%; animation-delay:3.5s; animation-duration:4.5s;"></div>
</div>
```

---

### C · Animated Dot Grid

**O que é:** grid de pontos com `background-image` que se move lentamente via `background-position`, criando ilusão de scroll infinito.

**Quando usar:** seções com muita área vazia, especialmente as que têm fundo `bg-0` (preto). Substitui o grid estático — nunca usar ambos na mesma seção.

```css
.animated-dot-grid {
    position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(rgba(245,244,237,0.035) 1px, transparent 1px);
    background-size: 48px 48px;
    animation: grid-drift 25s linear infinite;
}
@keyframes grid-drift {
    0%   { background-position: 0 0; }
    100% { background-position: 48px 48px; }
}
```

```html
<div class="animated-dot-grid" aria-hidden="true"></div>
```

---

### D · Circuit SVG Overlay

**O que é:** SVG com caminhos em L (traços de circuito) e pontos nos nós que se animam via `stroke-dashoffset` e `opacity`. Cria aparência de placa de circuito em segundo plano.

**Quando usar:** seções de serviço/produto onde o tema tecnologia precisa ser reforçado visualmente. Funciona bem combinado com o animated dot grid.

**Como ajustar:** editar os atributos `d` dos `<path>` para se adequar ao layout da seção. Os caminhos devem ser em L (horizontal + vertical), nunca diagonais.

```css
.circuit-overlay { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.circuit-path {
    stroke: rgba(201,100,66,0.10); stroke-width: 1; fill: none;
    stroke-dasharray: 220; stroke-dashoffset: 220;
    animation: draw-path 4s ease-in-out infinite alternate;
}
.circuit-dot { animation: dot-pulse 3s ease-in-out infinite alternate; }
@keyframes draw-path {
    0%  { stroke-dashoffset: 220; opacity: 0; }
    15% { opacity: 1; }
    80% { stroke-dashoffset: 0; opacity: 0.8; }
    100%{ stroke-dashoffset: 0; opacity: 0.2; }
}
@keyframes dot-pulse {
    0%, 100% { opacity: 0.15; }
    50%       { opacity: 0.55; }
}
```

```html
<div class="circuit-overlay" aria-hidden="true">
    <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path class="circuit-path" d="M 80 120 L 80 300 L 320 300"/>
        <path class="circuit-path" d="M 1320 80 L 1320 220 L 1100 220 L 1100 380"/>
        <path class="circuit-path" d="M 600 520 L 600 420 L 820 420 L 820 280"/>
        <circle class="circuit-dot" cx="80"   cy="120" r="3.5" fill="rgba(201,100,66,0.3)"/>
        <circle class="circuit-dot" cx="320"  cy="300" r="3.5" fill="rgba(201,100,66,0.3)"/>
        <circle class="circuit-dot" cx="1320" cy="80"  r="3.5" fill="rgba(201,100,66,0.3)"/>
        <circle class="circuit-dot" cx="1100" cy="380" r="3.5" fill="rgba(201,100,66,0.3)"/>
        <circle class="circuit-dot" cx="600"  cy="520" r="3.5" fill="rgba(201,100,66,0.3)"/>
        <circle class="circuit-dot" cx="820"  cy="280" r="3.5" fill="rgba(201,100,66,0.3)"/>
    </svg>
</div>
```

---

### E · Diagonal Grid

**O que é:** grid de linhas diagonais a 45° com deriva lenta, criando textura discreta sem chamar atenção.

**Quando usar:** seções com fundo `bg-1` que precisam de textura sutil sem o tom tecnológico do dot grid. Bom para seções de FAQ/accordion.

**Opacidade:** manter `rgba(245,244,237,0.018)` — qualquer valor acima de `0.025` fica visível demais.

```css
.diagonal-grid {
    position: absolute; inset: 0; pointer-events: none;
    background-image: repeating-linear-gradient(
        45deg,
        transparent, transparent 24px,
        rgba(245,244,237,0.018) 24px,
        rgba(245,244,237,0.018) 25px
    );
    animation: diagonal-drift 40s linear infinite;
}
@keyframes diagonal-drift {
    0%   { background-position: 0 0; }
    100% { background-position: 120px 120px; }
}
```

```html
<div class="diagonal-grid" aria-hidden="true"></div>
```

---

### F · Data Stream Particles

**O que é:** pontos gerados por JS que sobem lentamente na seção, representando dados em fluxo. Cada ponto tem tamanho, velocidade e posição aleatórios para não parecer mecânico.

**Quando usar:** seções de processo/pipeline onde a metáfora de dados em movimento reforça o conceito. Não usar em seções de depoimento ou texto pesado.

**Parâmetros recomendados:** 20–30 partículas, duração 10–24s, tamanho 1.2–3.7px.

```html
<div id="data-stream-container" class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
```

```css
.data-stream-particle {
    position: absolute; border-radius: 50%;
    background: rgba(201,100,66,0.5);
    pointer-events: none;
    animation: data-rise linear infinite;
}
@keyframes data-rise {
    0%   { transform: translateY(0); opacity: 0; }
    8%   { opacity: 1; }
    85%  { opacity: 0.4; }
    100% { transform: translateY(-110%); opacity: 0; }
}
```

```js
(function() {
    const container = document.getElementById('data-stream-container');
    if (!container) return;
    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
        const dot = document.createElement('div');
        dot.className = 'data-stream-particle';
        const size  = Math.random() * 2.5 + 1.2;
        const left  = Math.random() * 100;
        const bottom = Math.random() * 100;
        const dur   = Math.random() * 14 + 10;
        const delay = Math.random() * -20; // negativo = já em progresso no load
        dot.style.cssText = `width:${size}px;height:${size}px;left:${left}%;bottom:${bottom}%;animation-duration:${dur}s;animation-delay:${delay}s;opacity:0;`;
        container.appendChild(dot);
    }
})();
```

---

### G · Expanding Rings

**O que é:** 3 anéis circulares que se expandem do centro e desaparecem em fade. Cria metáfora de sinal/pulso.

**Quando usar:** seção de CTA principal — reforça a ideia de "chame agora". Não usar em mais de uma seção por página.

**Ajuste de escala:** `scale(9)` no estado final expande para cobrir a largura de uma tela wide. Reduzir para `scale(6)` em seções menores.

```css
.ring-pulse {
    position: absolute; left: 50%; top: 50%;
    width: 160px; height: 160px; border-radius: 50%;
    border: 1px solid rgba(201,100,66,0.12);
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
    animation: ring-expand 5s ease-out infinite;
}
.ring-pulse:nth-child(2) { animation-delay: 1.67s; }
.ring-pulse:nth-child(3) { animation-delay: 3.33s; }
@keyframes ring-expand {
    0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(9); opacity: 0; }
}
```

```html
<div aria-hidden="true">
    <div class="ring-pulse"></div>
    <div class="ring-pulse"></div>
    <div class="ring-pulse"></div>
</div>
```

---

### H · Cases Blob (variante focada)

**O que é:** variante do ambient blob, maior e posicionada no canto inferior, sem filter blur tão alto. Usada especificamente em seções de grid de cards para criar calor visual no fundo sem interferir nos cards.

```css
.cases-blob {
    position: absolute; border-radius: 50%; pointer-events: none;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(201,100,66,0.05) 0%, transparent 65%);
    filter: blur(60px);
    animation: blob-drift-c 18s ease-in-out infinite;
}
```

```html
<div class="cases-blob" style="bottom:-15%;right:-8%;animation-delay:1s;" aria-hidden="true"></div>
```

---

## Mapa de uso por seção (referência home)

| Seção | Sistemas ativos |
|---|---|
| Hero | Canvas particles · Floating orbs · Cursor blob · Parallax |
| Credibilidade (métricas) | Flow beams (B) |
| Problema / Solução | Morphing blobs (A) × 2 |
| Serviços | Animated dot grid (C) · Circuit SVG (D) |
| Processo | Data stream particles (F) · Blob (A) |
| Anti-objeções | Diagonal grid (E) · Blob (A) |
| Cases | Cases blob (H) |
| CTA principal | Expanding rings (G) · dot grid estático |
| Blog / Footer | Limpo — sem ambient background |

---

## Checklist de implementação por página

Ao construir uma nova página Sunter, verificar:

- [ ] `#scroll-progress` presente no `<body>`
- [ ] `#cursor-blob` presente e com guard `@media (pointer: fine)`
- [ ] H1 principal usa word-split
- [ ] Hero tem entrance sequence (eyebrow → título → sub → CTAs)
- [ ] Parallax ativo no hero, desativado nas demais seções
- [ ] Todos os elementos de conteúdo têm `.reveal`, `.reveal-left` ou `.reveal-right`
- [ ] IntersectionObserver inicializado para `.reveal`, `.draw-line` e `.data-counter`
- [ ] CTAs principais têm `.magnetic`
- [ ] Seções com ambient background têm `position: relative` e `overflow: hidden`
- [ ] Todos os ambient elements têm `pointer-events: none` e `aria-hidden="true"`
- [ ] `@media (prefers-reduced-motion: reduce)` desativa todas as animações ambient
