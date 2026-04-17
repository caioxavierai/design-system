# Sunter Design System v3.0 — "Warm Intelligence"

Arquivos prontos para uso em qualquer projeto Angular ou React.

## Estrutura

```
design-system/
  sunter-tokens.css          ← obrigatório em todos os projetos
  sunter-design-system.md    ← documentação completa

  angular/
    sunter-ds.module.ts      ← importa tudo de uma vez
    services/
      theme.service.ts       ← dark/light toggle com signal
    components/
      snt-button.*           ← variantes: primary, secondary, ghost, destructive
      snt-card.*             ← variantes: default, glow, shimmer, magnetic
      snt-badge.*            ← variantes: active, warn, error, neutral, accent
    directives/
      fade-up.directive.ts   ← scroll reveal com IntersectionObserver
    primeng-theme.scss       ← override de tema para projetos com PrimeNG

  react/
    tailwind.config.js       ← tokens mapeados para Tailwind
    globals.css              ← base styles + @tailwind
    components/
      Button.tsx
      Card.tsx
      Badge.tsx
    hooks/
      useTheme.ts            ← dark/light toggle persistido no localStorage
      useFadeUp.ts           ← scroll reveal hook
```

---

## Instalação em projeto Angular

**1. Copie a pasta** `design-system/angular/` para `src/app/shared/sunter-ds/`

**2. Copie** `sunter-tokens.css` para `src/`

**3. No `styles.scss` global:**
```scss
@import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Manrope:wght@200;300;400;500&display=swap');
@import 'sunter-tokens.css';

body {
  background: var(--snt-bg-0);
  color: var(--snt-tx-1);
  font-family: var(--snt-font-sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}
```

**4. No `app.config.ts`:**
```typescript
import { provideAppInitializer, inject } from '@angular/core';
import { ThemeService } from './shared/sunter-ds/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => inject(ThemeService).init())
  ]
};
```

**5. No componente:**
```typescript
import { SntButtonComponent, SntCardComponent, SntBadgeComponent, FadeUpDirective } from './shared/sunter-ds';
// ou importe SunterDsModule se usar NgModule
```

```html
<snt-button variant="primary">Começar</snt-button>
<snt-button variant="ghost" [loading]="true">Carregando</snt-button>

<snt-card variant="shimmer">
  <div class="snt-card-tag">IA</div>
  <h3>Título</h3>
</snt-card>

<snt-badge variant="active" [pulse]="true">Online</snt-badge>

<div sntFadeUp>Aparece ao scrollar</div>
<div [sntFadeUp]="200">Aparece com 200ms de delay</div>
```

---

## Instalação em projeto React / Next.js

**1. Copie** `sunter-tokens.css` para `src/`

**2. Copie a pasta** `design-system/react/` para `src/sunter-ds/`

**3. Substitua ou mescle** `tailwind.config.js` com o arquivo fornecido

**4. No `globals.css` (ou `app.css`):**
```css
@import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Manrope:wght@200;300;400;500&display=swap');
@import './sunter-tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

**5. No `layout.tsx` (Next.js):**
```tsx
import { useTheme } from '@/sunter-ds/hooks/useTheme'
// ou inicialize via data-theme no <html> com SSR:
// <html data-theme="dark">
```

**6. Uso:**
```tsx
import { Button } from '@/sunter-ds/components/Button'
import { Card, CardTag, CardFooter } from '@/sunter-ds/components/Card'
import { Badge } from '@/sunter-ds/components/Badge'
import { useFadeUp } from '@/sunter-ds/hooks/useFadeUp'

<Button variant="primary">Começar</Button>
<Button variant="ghost" loading>Carregando</Button>

<Card shimmer>
  <CardTag>IA</CardTag>
  <h3>Título</h3>
  <CardFooter><span>Label</span><span>Valor</span></CardFooter>
</Card>

<Badge variant="active" pulse>Online</Badge>
```

---

## Regras do sistema

- Nenhuma superfície usa cinza frio ou azul — apenas undertones oliva/marrom
- Peso de fonte máximo: 500 (nunca bold)
- Fragment Mono apenas em labels técnicos, badges, código e metadados
- Único accent cromático: `#C96442` terracotta
- Easing padrão: `cubic-bezier(.16,1,.3,1)` em todas as transições de UI

Consulte `sunter-design-system.md` para a documentação completa.
