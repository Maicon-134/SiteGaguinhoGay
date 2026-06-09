# HiagoXiter STORE

Site da loja **hiagoxiter.com** (React + Vite).

## Problema atual na Hostinger

O domínio **hiagoxiter.com** está com o arquivo errado. Foi enviado o código-fonte em vez do site compilado.

| Errado (código-fonte) | Correto (site compilado) |
|-----------------------|--------------------------|
| `src="/src/main.tsx"` | `src="/assets/index-xxxxx.js"` |

## Atualizar na Hostinger

### Opção A — Baixar ZIP pronto (mais fácil)

1. Baixe: https://github.com/Maicon-134/SiteGaguinhoGay/archive/refs/heads/hostinger.zip
2. Extraia o ZIP
3. No **hPanel** → **hiagoxiter.com** → **Gerenciador de arquivos** → `public_html`
4. **Apague tudo** que está em `public_html`
5. Envie o conteúdo extraído do ZIP (index.html, 404.html, .htaccess, pasta assets)

### Opção B — Git na Hostinger

A branch **`hostinger`** é atualizada automaticamente a cada push na `main`.

No hPanel, conecte o repositório GitHub e use a branch **`hostinger`** (não `main`).

### Opção C — Build local

```bash
npm install
npm run build:hostinger
```

Envie tudo de `dist/` para `public_html`.

## Rodar localmente

```bash
npm install
npm run dev
```
