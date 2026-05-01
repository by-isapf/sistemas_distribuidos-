# Isabel Freire — Portfólio

Portfólio pessoal desenvolvido com **React + Vite + TypeScript + Tailwind CSS**, com suporte a dark/light mode, design responsivo e SEO otimizado.

🔗 **Demo:** https://isabelfreireduarte.com.br (substitua pelo seu domínio final)

---

## 🚀 Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui
- Lucide Icons
- Tema claro/escuro com persistência

---

## 📦 Como instalar

Pré-requisitos: **Node.js 18+** e **npm** (ou bun/pnpm).

```bash
# clone o repositório
git clone https://github.com/by-isapf/isabelb7z/portfolio.git
cd portfolio

# instale dependências
npm install
```

## 🧑‍💻 Como rodar localmente

```bash
npm run dev
```

Acesse `http://localhost:5173`.

## 🏗️ Como gerar o build de produção

```bash
npm run build
```

A pasta `dist/` será gerada com o site otimizado. Para testar localmente:

```bash
npm run preview
```

---

## 🐙 Como subir no GitHub

```bash
git init
git add .
git commit -m "feat: portfólio inicial"
git branch -M main
git remote add origin https://github.com/by-isapf/isabelb7z/portfolio.git
git push -u origin main
```

---

## ☁️ Como hospedar na AWS Amplify

1. Acesse o **AWS Amplify Console** → **New app** → **Host web app**.
2. Conecte sua conta do **GitHub** e escolha o repositório `portfolio` (branch `main`).
3. A Amplify detecta automaticamente um app Vite. Confirme as configurações de build:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

4. Em **Rewrites and redirects**, adicione a regra para SPA (React Router):

| Source       | Target       | Type                        |
| ------------ | ------------ | --------------------------- |
| `</^[^.]+$/> ` | `/index.html`| `200 (Rewrite)`             |

5. Clique em **Save and Deploy**. Cada `git push` na branch `main` dispara um novo deploy.
6. Em **Domain management** você pode conectar o seu domínio personalizado.

---

## 🔎 Como enviar o site para o Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. **Adicionar propriedade** → escolha **Prefixo do URL** → cole `https://seu-dominio.com.br`.
3. Verifique a propriedade (recomendado: meta tag HTML — cole no `<head>` de `index.html`).
4. Vá em **Sitemaps** e envie:
   ```
   https://seu-dominio.com.br/sitemap.xml
   ```
5. Em **Inspeção de URL**, cole a URL principal e clique em **Solicitar indexação**.
6. (Opcional) Conecte ao **Google Analytics 4** para métricas de tráfego.

---

## ✏️ O que você deve substituir

Antes de publicar, atualize:

| Item                  | Onde alterar                                                       |
| --------------------- | ------------------------------------------------------------------ |
| **Email**             | `src/components/portfolio/Contact.tsx` → constante `EMAIL`         |
| **LinkedIn**          | `src/components/portfolio/Contact.tsx` → constante `LINKEDIN`      |
| **Foto pessoal**      | adicione em `src/assets/` e use no `Hero.tsx` (opcional)           |
| **Domínio final**     | `index.html` (canonical, og:url), `public/sitemap.xml`, `public/robots.txt` |
| **OG image**          | adicione `public/og-image.png` (1200x630) com sua identidade visual|

---

## 📁 Estrutura

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── ui/                  # shadcn components
├── pages/
│   └── Index.tsx
├── index.css                # design system (tokens HSL)
└── main.tsx
public/
├── robots.txt
├── sitemap.xml
└── manifest.json
```

---

© Isabel Freire
