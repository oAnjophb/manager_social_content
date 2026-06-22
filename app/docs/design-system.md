# GoFundMe Design System

> Design system extraÃ­do de [https://www.gofundme.com/pt-pt](https://www.gofundme.com/pt-pt) para guiar agentes na criaÃ§Ã£o de pÃ¡ginas com a identidade visual GoFundMe.

## 1. Identidade Visual â€” VisÃ£o Geral

O GoFundMe Ã© a maior plataforma de crowdfunding do mundo, com foco em **confianÃ§a, aÃ§Ã£o rÃ¡pida e inclusÃ£o social**. O design reflete uma abordagem humanizada e acessÃ­vel, priorizando a conexÃ£o emocional entre arrecadadores e doadores. A estÃ©tica Ã© moderna, limpa e otimizada para mobile-first, com Ã©nfase em clareza e seguranÃ§a.

**Palavras-chave:** ConfianÃ§a â€¢ InclusÃ£o â€¢ AÃ§Ã£o RÃ¡pida â€¢ Humanizado â€¢ AcessÃ­vel â€¢ SeguranÃ§a â€¢ Comunidade

**PrincÃ­pios de Design:**

- **Inclusivo e acessÃ­vel a todos**: Design pensado para diferentes pÃºblicos, idiomas e capacidades
- **Humanizado com foco em conexÃ£o**: Destaque a historias reais e conexÃµes emocionais
- **Otimizado para mobile-first**: Priorize experiÃªncia em dispositivos mÃ³veis
- **ConfianÃ§a e seguranÃ§a em primeiro plano**: Transmita seguranÃ§a em transaÃ§Ãµes e dados
- **AÃ§Ã£o rÃ¡pida e simplicidade**: Reduzir passos para arrecadar ou fazer doaÃ§Ãµes

---

## 1.1 Logo

**URL Oficial:** `https://www.gofundme.com/` (logo no header)

**Variantes:**

- Logo principal (cor completa)
- Logo horizontal (wide format)
- Favicon 32x32px

**Uso:**

- Header/navegaÃ§Ã£o principal
- Branding em materiais
- Social sharing

**Exemplo HTML:**

```html
<a href="https://www.gofundme.com/pt-pt">
  <img src="https://www.gofundme.com/nextassets/home/..." alt="GoFundMe" width="200" height="auto" />
</a>
```

---

## 2. Paleta de Cores

### Cores PrimÃ¡rias

| Token               | Valor / DescriÃ§Ã£o        | Hex     | RGB                | Uso                                              |
| ------------------- | -------------------------- | ------- | ------------------ | ------------------------------------------------ |
| --gfm-green-primary | Verde GoFundMe (principal) | #00B82E | rgb(0, 184, 46)    | BotÃµes primÃ¡rios, CTAs, links ativos, destaque |
| --gfm-green-dark    | Verde escuro (hover)       | #008C23 | rgb(0, 140, 35)    | Estados hover de botÃµes, links visitados        |
| --gfm-green-light   | Verde claro (backgrounds)  | #E8F8F0 | rgb(232, 248, 240) | Backgrounds leves, overlays, badges              |

### Cores de Suporte

| Token          | Valor                    | Hex     | RGB                | Uso                            |
| -------------- | ------------------------ | ------- | ------------------ | ------------------------------ |
| --gfm-white    | Branco puro              | #FFFFFF | rgb(255, 255, 255) | Backgrounds primÃ¡rios, cards  |
| --gfm-gray-50  | Branco/muito claro       | #FAFAFA | rgb(250, 250, 250) | Backgrounds secundÃ¡rios leves |
| --gfm-gray-100 | Cinza muito claro        | #F5F5F5 | rgb(245, 245, 245) | Backgrounds secundÃ¡rios       |
| --gfm-gray-200 | Cinza claro              | #EEEEEE | rgb(238, 238, 238) | Borders, dividers leves        |
| --gfm-gray-300 | Cinza mÃ©dio-claro       | #E0E0E0 | rgb(224, 224, 224) | Borders, inputs                |
| --gfm-gray-600 | Cinza mÃ©dio             | #757575 | rgb(117, 117, 117) | Textos secundÃ¡rios            |
| --gfm-gray-700 | Cinza escuro             | #616161 | rgb(97, 97, 97)    | Textos desabilitados           |
| --gfm-gray-900 | Cinza muito escuro/preto | #212121 | rgb(33, 33, 33)    | Texto principal, headings      |

### Cores de Status

| Token         | Valor                | Hex     | RGB               | Uso                                 |
| ------------- | -------------------- | ------- | ----------------- | ----------------------------------- |
| --gfm-success | Verde de sucesso     | #4CAF50 | rgb(76, 175, 80)  | Mensagens de sucesso, checkmarks    |
| --gfm-error   | Vermelho de erro     | #F44336 | rgb(244, 67, 54)  | Mensagens de erro, avisos crÃ­ticos |
| --gfm-warning | Amarelo de aviso     | #FFC107 | rgb(255, 193, 7)  | Avisos, informaÃ§Ãµes importantes   |
| --gfm-info    | Azul de informaÃ§Ã£o | #2196F3 | rgb(33, 150, 243) | Dicas, informaÃ§Ãµes, tooltips      |

### Cores de Gradientes

| Nome           | Gradiente                           | Uso                            |
| -------------- | ----------------------------------- | ------------------------------ |
| Hero Gradient  | De #00B82E para #008C23             | Hero section, CTAs destacadas  |
| Subtle Overlay | De rgba(0,184,46,0.1) a transparent | Overlays de hover, backgrounds |

---

## 3. Tipografia

### Font Families

| Token                | FamÃ­lia                                                                            | Peso(s)            | ImportaÃ§Ã£o   | Uso                       |
| -------------------- | ----------------------------------------------------------------------------------- | ------------------ | -------------- | ------------------------- |
| --gfm-font-primary   | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif | 400, 500, 600, 700 | Sistema nativo | Body, headings, interface |
| --gfm-font-secondary | 'Inter', sans-serif                                                                 | 400, 600           | Google Fonts   | Destaque, CTAs, callouts  |

**Fallback:** Se fontes web nÃ£o carregarem, usar stack de sistema nativo.

### Escala TipogrÃ¡fica

| Elemento    | Tamanho         | Peso | Line Height | Letter Spacing | Uso                               |
| ----------- | --------------- | ---- | ----------- | -------------- | --------------------------------- |
| H1          | 2.5rem (40px)   | 700  | 1.2         | -0.5px         | Headlines principais, hero titles |
| H2          | 2rem (32px)     | 600  | 1.3         | -0.25px        | Subheadings, seÃ§Ã£o titles       |
| H3          | 1.5rem (24px)   | 600  | 1.4         | 0              | TÃ­tulos de subsection            |
| H4          | 1.25rem (20px)  | 600  | 1.4         | 0              | SubtÃ­tulos, card titles          |
| Body        | 1rem (16px)     | 400  | 1.5         | 0              | Texto principal, descriÃ§Ãµes     |
| Body Strong | 1rem (16px)     | 600  | 1.5         | 0              | Texto enfatizado                  |
| Small       | 0.875rem (14px) | 400  | 1.5         | 0              | Textos menores, labels            |
| XSmall      | 0.75rem (12px)  | 400  | 1.4         | 0              | Captions, helper text             |

### CSS TipogrÃ¡fico Completo

```css
:root {
  --gfm-font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --gfm-font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

html {
  font-size: 16px;
}

body {
  font-family: var(--gfm-font-primary);
  font-size: 1rem;
  line-height: 1.5;
  color: #212121;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 0 0 1rem 0;
  color: #212121;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.25px;
  margin: 0 0 0.875rem 0;
  color: #212121;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 0.75rem 0;
  color: #212121;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 0.625rem 0;
  color: #212121;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  color: #212121;
}

small {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #757575;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1.4;
  color: #757575;
}

strong,
.text-strong {
  font-weight: 600;
}

.text-secondary {
  color: #757575;
}

.text-disabled {
  color: #bdbdbd;
}
```

---

## 4. Componentes

### 4.1 BotÃµes

#### Primary Button (Verde, call-to-action principal)

```css
.btn,
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #00b82e;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--gfm-font-primary);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  gap: 8px;
  min-height: 44px;
  outline: none;
}

.btn-primary:hover:not(:disabled) {
  background-color: #008c23;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:disabled {
  background-color: #bdbdbd;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-primary:focus {
  outline: 2px solid #00b82e;
  outline-offset: 2px;
}

/* Tamanhos alternativos */
.btn-primary.btn-sm {
  padding: 8px 16px;
  font-size: 0.875rem;
}

.btn-primary.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
}

.btn-primary.btn-block {
  width: 100%;
}
```

#### Secondary Button (Outline/Transparente)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #00b82e;
  padding: 10px 22px;
  border: 2px solid #00b82e;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--gfm-font-primary);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  gap: 8px;
  min-height: 44px;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #00b82e;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn-secondary:active:not(:disabled) {
  background-color: #008c23;
  border-color: #008c23;
}

.btn-secondary:focus {
  outline: 2px solid #00b82e;
  outline-offset: 2px;
}

.btn-secondary:disabled {
  border-color: #bdbdbd;
  color: #bdbdbd;
  cursor: not-allowed;
}
```

#### Ghost Button (Texto simples com underline)

```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #00b82e;
  border: none;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--gfm-font-primary);
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.2s ease;
  gap: 8px;
  outline: none;
}

.btn-ghost:hover {
  color: #008c23;
  text-decoration: none;
}

.btn-ghost:focus {
  outline: 2px solid #00b82e;
  outline-offset: 2px;
}

.btn-ghost:disabled {
  color: #bdbdbd;
  cursor: not-allowed;
}
```

---

### 4.2 Cards

#### Campaign Card (Carta de campanha/projeto)

```css
.card {
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  border-color: #bdbdbd;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #f5f5f5;
  display: block;
}

.card-content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #212121;
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-description {
  font-size: 0.875rem;
  color: #757575;
  margin-bottom: 12px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eeeeee;
  padding-top: 12px;
  margin-top: auto;
}

.card-amount {
  font-size: 0.75rem;
  color: #757575;
  font-weight: 500;
}

.card-progress {
  font-size: 0.75rem;
  color: #757575;
}

.card-button {
  margin-top: 12px;
}

/* Card com badge de destaques */
.card.featured {
  border: 2px solid #00b82e;
}

.card-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #00b82e;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}
```

---

### 4.3 NavegaÃ§Ã£o (Header/Navbar)

```css
header,
nav {
  background-color: white;
  padding: 16px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.nav-logo {
  height: 40px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.nav-logo img {
  height: 100%;
  width: auto;
  display: block;
}

.nav-menu {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #212121;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  cursor: pointer;
  padding: 8px 0;
  display: block;
}

.nav-link:hover {
  color: #00b82e;
}

.nav-link.active {
  color: #00b82e;
}

.nav-link:focus {
  outline: 2px solid #00b82e;
  outline-offset: 4px;
  border-radius: 2px;
}

.nav-cta {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-left: auto;
}

/* Menu dropdown para mobile */
@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #eeeeee;
    display: none;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-cta {
    margin-left: 0;
    flex-direction: column;
    width: 100%;
  }
}
```

---

### 4.4 Footer

```css
footer {
  background-color: #212121;
  color: white;
  padding: 48px 20px 24px;
  margin-top: 80px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  color: white;
  margin: 0 0 16px 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #bdbdbd;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  display: block;
}

.footer-section a:hover {
  color: white;
  padding-left: 4px;
}

.footer-section a:focus {
  outline: 2px solid #00b82e;
  outline-offset: 2px;
}

.footer-bottom {
  border-top: 1px solid #424242;
  padding-top: 24px;
  text-align: center;
  font-size: 0.875rem;
  color: #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-social {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: white;
  text-decoration: none;
}

.footer-social a:hover {
  background-color: #00b82e;
}

.footer-social a svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
```

---

## 5. Layout e Grid

### Estrutura de Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.container-lg {
  max-width: 1400px;
}

.container-sm {
  max-width: 1000px;
}

.grid {
  display: grid;
  gap: 24px;
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.section {
  padding: 80px 0;
}

.section-sm {
  padding: 48px 0;
}

.section-lg {
  padding: 120px 0;
}

@media (max-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .section {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 40px 0;
  }

  .section-lg {
    padding: 60px 0;
  }
}
```

### Breakpoints Responsivos

| Device       | Breakpoint      | Container Max | Padding | Grid Colunas |
| ------------ | --------------- | ------------- | ------- | ------------ |
| Mobile Small | < 480px         | 100%          | 16px    | 1 coluna     |
| Mobile       | 480px - 640px   | 100%          | 16px    | 1-2 colunas  |
| Tablet       | 640px - 1024px  | 720px         | 20px    | 2-3 colunas  |
| Desktop      | 1024px - 1400px | 1200px        | 20px    | 3-4 colunas  |
| Desktop XL   | > 1400px        | 1400px        | 20px    | 4+ colunas   |

---

## 6. Efeitos e AnimaÃ§Ãµes

### Hover Effects

```css
/* ElevaÃ§Ã£o suave com shadow */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Fade suave */
.fade-on-hover {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.fade-on-hover:hover {
  opacity: 0.8;
}

/* Scale suave */
.scale-on-hover {
  transition: transform 0.3s ease;
}

.scale-on-hover:hover {
  transform: scale(1.05);
}

/* Color transition */
.color-on-hover {
  color: #757575;
  transition: color 0.2s ease;
}

.color-on-hover:hover {
  color: #00b82e;
}

/* Underline animation */
.underline-animation {
  position: relative;
  text-decoration: none;
  color: #00b82e;
  transition: color 0.2s ease;
}

.underline-animation::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00b82e;
  transition: width 0.3s ease;
}

.underline-animation:hover::after {
  width: 100%;
}
```

### TransiÃ§Ãµes Globais

```css
/* Disable transitions for reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

/* Focus visible para acessibilidade */
:focus-visible {
  outline: 2px solid #00b82e;
  outline-offset: 2px;
  border-radius: 2px;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid #00b82e;
  outline-offset: 2px;
}
```

---

## 7. EspaÃ§amento e Sizing

### Scale de Spacing

```css
:root {
  /* Spacing scale */
  --gfm-space-0: 0;
  --gfm-space-1: 4px;
  --gfm-space-2: 8px;
  --gfm-space-3: 12px;
  --gfm-space-4: 16px;
  --gfm-space-5: 20px;
  --gfm-space-6: 24px;
  --gfm-space-7: 28px;
  --gfm-space-8: 32px;
  --gfm-space-9: 36px;
  --gfm-space-10: 40px;
  --gfm-space-12: 48px;
  --gfm-space-16: 64px;
  --gfm-space-20: 80px;

  /* Sizing */
  --gfm-size-xs: 320px;
  --gfm-size-sm: 640px;
  --gfm-size-md: 768px;
  --gfm-size-lg: 1024px;
  --gfm-size-xl: 1280px;
  --gfm-size-2xl: 1536px;

  /* Border Radius */
  --gfm-radius-none: 0;
  --gfm-radius-sm: 4px;
  --gfm-radius-md: 6px;
  --gfm-radius-lg: 8px;
  --gfm-radius-xl: 12px;
  --gfm-radius-full: 999px;
}
```

---

## 8. Anti-patterns â€” O que NÃƒO fazer

| âŒ Evitar                                | Fazer                                     | Motivo                            |
| ---------------------------------------- | ----------------------------------------- | --------------------------------- |
| BotÃµes com cores aleatÃ³rias            | Use apenas #00B82E e #008C23              | ConsistÃªncia da marca            |
| Fontes proprietÃ¡rias sem fallback       | Sempre declare fallback de Google Fonts   | Compatibilidade cross-browser     |
| Shadows muito agressivas (blur > 20px)   | Use shadows da escala (sm, md, lg)        | ManutenÃ§Ã£o de hierarquia visual |
| AnimaÃ§Ãµes rÃ¡pidas demais (< 200ms)    | MÃ­nimo 300ms para transiÃ§Ãµes           | Accessibilidade e usabilidade     |
| Padding/margin aleatÃ³rios               | Use mÃºltiplos de 8px (8, 16, 24, 32px)   | Alinhamento e consistÃªncia       |
| Cores de texto com contraste baixo       | Sempre > WCAG AA (4.5:1)                  | Acessibilidade de leitura         |
| Imagens redimensionadas sem aspect-ratio | Declare aspect-ratio ou use object-fit    | Evita layout shifts               |
| Links azuis padrÃ£o do navegador         | Use cores da paleta com underline         | Identidade visual consistente     |
| Sem hover states em desktop              | Implemente hover effects em todos botÃµes | UX responsiva                     |
| Touch targets muito pequenos             | MÃ­nimo 44x44px em mobile                 | Acessibilidade tÃ¡til             |

---

## 9. Assets â€” URLs Oficiais

### Logo e Branding

| Asset          | URL                                | Tipo | DimensÃµes | Uso              |
| -------------- | ---------------------------------- | ---- | ---------- | ---------------- |
| Logo Principal | https://www.gofundme.com/ (header) | SVG  | ~200x40px  | Header, branding |
| Favicon        | https://www.gofundme.com/          | ICO  | 32x32      | Aba do navegador |

### Imagens de ReferÃªncia

| Asset          | URL                                                                              | Tipo | DimensÃµes | Uso                |
| -------------- | -------------------------------------------------------------------------------- | ---- | ---------- | ------------------ |
| Hero Image     | https://www.gofundme.com/nextassets/home/hero/arc-image-circle-mobile@1_5x.png   | PNG  | ~360x360   | Hero section       |
| Trust & Safety | https://www.gofundme.com/nextassets/home/trust-and-safety/trust-and-safety-2.png | PNG  | ~600x400   | SeÃ§Ã£o confianÃ§a |

**Nota:** URLs de imagens podem variar. Use o padrÃ£o de CDN: `images.gofundme.com` com parÃ¢metros de redimensionamento.

---

## 10. CSS Variables â€” Resumo RÃ¡pido

```css
:root {
  /* === CORES PRIMÃRIAS === */
  --gfm-green-primary: #00b82e;
  --gfm-green-dark: #008c23;
  --gfm-green-light: #e8f8f0;

  /* === ESCALA CINZA === */
  --gfm-white: #ffffff;
  --gfm-gray-50: #fafafa;
  --gfm-gray-100: #f5f5f5;
  --gfm-gray-200: #eeeeee;
  --gfm-gray-300: #e0e0e0;
  --gfm-gray-400: #bdbdbd;
  --gfm-gray-600: #757575;
  --gfm-gray-700: #616161;
  --gfm-gray-900: #212121;

  /* === STATUS === */
  --gfm-success: #4caf50;
  --gfm-error: #f44336;
  --gfm-warning: #ffc107;
  --gfm-info: #2196f3;

  /* === TEXTO === */
  --gfm-text-primary: #212121;
  --gfm-text-secondary: #757575;
  --gfm-text-disabled: #bdbdbd;

  /* === TIPOGRAFIA === */
  --gfm-font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --gfm-font-secondary: 'Inter', sans-serif;

  --gfm-font-size-xs: 0.75rem;
  --gfm-font-size-sm: 0.875rem;
  --gfm-font-size-base: 1rem;
  --gfm-font-size-lg: 1.125rem;
  --gfm-font-size-xl: 1.25rem;
  --gfm-font-size-2xl: 1.5rem;
  --gfm-font-size-3xl: 2rem;
  --gfm-font-size-4xl: 2.5rem;

  /* === SHADOWS === */
  --gfm-shadow-none: none;
  --gfm-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --gfm-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --gfm-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --gfm-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* === TRANSITIONS === */
  --gfm-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --gfm-transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --gfm-transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  /* === Z-INDEX === */
  --gfm-z-dropdown: 1000;
  --gfm-z-sticky: 1020;
  --gfm-z-fixed: 1030;
  --gfm-z-modal: 1050;
}
```

---

## 11. PadrÃµes Comuns Observados

### Hero Section

```css
.hero {
  background: linear-gradient(135deg, #00b82e 0%, #008c23 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 24px;
  line-height: 1.2;
  font-weight: 700;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.95;
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
```

### Feature Section com Cards

```css
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 80px 20px;
  background-color: #fafafa;
}

.feature-card {
  background-color: white;
  padding: 32px 24px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  background-color: #e8f8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b82e;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-description {
  color: #757575;
  line-height: 1.6;
}
```

### Social Proof / Testimonials

```css
.testimonial {
  background-color: white;
  border-left: 4px solid #00b82e;
  padding: 24px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.testimonial:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateX(4px);
}

.testimonial-quote {
  font-size: 0.95rem;
  font-style: italic;
  color: #616161;
  margin-bottom: 12px;
  line-height: 1.6;
}

.testimonial-author {
  font-weight: 600;
  color: #212121;
  font-size: 0.95rem;
}

.testimonial-role {
  font-size: 0.875rem;
  color: #757575;
}
```

---

## 12. Checklist para Landing Pages

Use este checklist ao criar novas páginas com o design system GoFundMe:

### Identidade Visual

- [ ] Logo GoFundMe aplicado corretamente no header
- [ ] Cor primária verde (#00B82E) usada em CTAs
- [ ] Paleta de cores consistente em toda a pÃ¡gina
- [ ] Sem cores aleatórias fora da paleta definida
- [ ] Gradientes usando apenas verde primÃ¡rio â†’ verde escuro

### Tipografia

- [ ] Font primÃ¡ria do sistema aplicada (com fallbacks)
- [ ] H1 com 2.5rem e weight 700
- [ ] H2 com 2rem e weight 600
- [ ] Body text com 16px e line-height 1.5
- [ ] Contraste WCAG AA mÃ­nimo (4.5:1)
- [ ] Sem fontes proprietÃ¡rias sem fallback

### Componentes

- [ ] BotÃ£o primÃ¡rio com states: hover, active, disabled
- [ ] BotÃ£o secundÃ¡rio com outline
- [ ] Cards com hover effect (elevation + sombra)
- [ ] Header com navegaÃ§Ã£o responsive
- [ ] Footer com estrutura e links
- [ ] Inputs com border de 1px e radius 6px

### Layout e Responsividade

- [ ] Desktop layout (> 1024px) com grid 3-4 colunas
- [ ] Tablet layout (768-1024px) com grid 2 colunas
- [ ] Mobile layout (< 768px) com 1 coluna
- [ ] Container com padding 20px
- [ ] Sem overflow horizontal em mobile
- [ ] Touch targets mÃ­nimo 44x44px

### AnimaÃ§Ãµes e InteraÃ§Ãµes

- [ ] Hover effects em botÃµes (300ms mÃ­nimo)
- [ ] Card hover com translateY(-4px) + shadow
- [ ] TransiÃ§Ãµes suaves sem jank
- [ ] Respeita prefers-reduced-motion
- [ ] Focus states visÃ­veis em links/botÃµes

### EspaÃ§amento

- [ ] EspaÃ§amento entre elementos mÃºltiplo de 8px
- [ ] Padding interno dos cards 16-24px
- [ ] Gap entre grid items 24px
- [ ] Margin de seÃ§Ãµes 48-80px
- [ ] Padding vertical de hero 60-80px

### Assets e Imagens

- [ ] Imagens com aspect-ratio declarado
- [ ] Imagens otimizadas (< 500KB)
- [ ] Logos com alt text descritivo
- [ ] Sem imagens pixeladas ou distorcidas
- [ ] Background images com gradiente overlay se necessÃ¡rio

### Acessibilidade

- [ ] Todos os links com cor clara e underline/outline
- [ ] BotÃµes com focus states visÃ­veis
- [ ] Contraste mÃ­nimo 4.5:1 (texto body)
- [ ] Estrutura semÃ¢ntica HTML (nav, main, footer)
- [ ] Labels em formulÃ¡rios

### Performance

- [ ] Sem scripts bloqueantes
- [ ] CSS crÃ­tico inline no head
- [ ] Imagens lazy-loaded
- [ ] Tempo de carregamento < 3s
- [ ] Lighthouse score > 80

### Compatibilidade

- [ ] Testado em Chrome, Firefox, Safari, Edge
- [ ] Testado em iPhone (14+), iPad, Android
- [ ] Sem hardcoded widths (usar max-width)
- [ ] CÃ³digo bem formatado e comentado
- [ ] Sem console errors (F12)

---

## 13. ConclusÃ£o

O design system GoFundMe Ã© focado em **confianÃ§a, aÃ§Ã£o rÃ¡pida e inclusÃ£o social**. O verde primÃ¡rio (#00B82E) transmite seguranÃ§a e esperanÃ§a, enquanto a tipografia clara e espaÃ§amento generoso facilitam a navegaÃ§Ã£o. Todos os componentes foram pensados para mobile-first e acessibilidade.

**Para agentes e desenvolvedores:** Sempre use as cores da paleta, CSS variables e componentes base documentados neste arquivo. Respeite a tipografia e espaÃ§amento. Quando em dÃºvida, prefira simplicidade e clareza.

---

**Ãšltima atualizaÃ§Ã£o:** junho 2026  
**ExtraÃ§Ã£o de:** https://www.gofundme.com/pt-pt  
**VersÃ£o:** 1.0
