# HiagoXiter STORE

Site de vendas da loja HiagoXiter STORE (React + Vite).

## Site ao vivo

**https://melded-frame-i3n74nl.shipstatic.com**

Para manter o site permanentemente (grátis), acesse o link de claim:
https://my.shipstatic.com/claim/a124fef3dca77b64669cefdcaa95108f6377eb5101d9fbb547cd4f8c0548fa97

## Rodar localmente

**Pré-requisito:** Node.js 20+

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`.

No Windows, você também pode usar `dev-auto-reload.bat`.

## Publicar na Hostinger

Na Hostinger, o site funciona quando você envia **apenas o conteúdo da pasta `dist`** para `public_html` (não envie o código-fonte inteiro).

```bash
npm install
npm run build:hostinger
```

Depois do build, envie para a Hostinger tudo que estiver dentro de `dist/`:

- `index.html`
- `404.html`
- pasta `assets/`
- `.htaccess` (para as rotas `/produtos/...` funcionarem)

## Publicar no GitHub Pages

O repositório inclui um workflow que faz o deploy automaticamente ao enviar alterações para a branch `main`.

### Ativar o GitHub Pages (uma vez — 30 segundos)

O site compilado é publicado automaticamente na branch `gh-pages`.

1. Abra: https://github.com/Maicon-134/SiteGaguinhoGay/settings/pages
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**
3. Branch: **`gh-pages`** | Pasta: **`/ (root)`**
4. Clique em **Save**

Site: `https://maicon-134.github.io/SiteGaguinhoGay/`

### Por que não funcionava antes?

Este projeto é um app React compilado com Vite. O arquivo `index.html` na raiz do repositório é só para desenvolvimento local — ele tenta carregar `/src/main.tsx`, que não funciona em hospedagem estática.

Na Hostinger você provavelmente já enviou a pasta `dist` compilada. No GitHub, é preciso:

1. Compilar o projeto (`npm run build`)
2. Publicar a pasta `dist` (feito automaticamente pelo GitHub Actions)
3. Usar o caminho base `/SiteGaguinhoGay/` nos assets (já configurado em `build:pages`)
