# Git na Hostinger (hiagoxiter.com)

## Configuração no hPanel

| Campo | Valor |
|-------|-------|
| Repositório | `Maicon-134/SiteGaguinhoGay` |
| Branch | **`main`** |
| Diretório | **`public_html`** |

Clique em **Deploy** ou **Redeploy** e ative **Auto Deployment**.

## Como funciona

- Branch **`main`** = site compilado (vai para a Hostinger)
- Branch **`develop`** = código-fonte (edite aqui)

A cada push na `develop`, o GitHub compila e atualiza a `main` automaticamente.

## Erro 403

`public_html` está vazio. Clique em **Redeploy** no Git do hPanel.

## Erro: página em branco com /src/main.tsx

A branch errada estava selecionada. Use sempre **`main`**.
