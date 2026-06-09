# Configurar Git na Hostinger (hiagoxiter.com)

## Configuração correta no hPanel

1. Abra **hPanel** → pesquise **Git**
2. Selecione o domínio **hiagoxiter.com**
3. Configure assim:

| Campo | Valor correto |
|-------|---------------|
| Repositório | `Maicon-134/SiteGaguinhoGay` |
| Branch | **`hostinger`** (NÃO use `main`) |
| Diretório | **`public_html`** |

4. Clique em **Deploy** ou **Redeploy**
5. Ative **Auto Deployment**

## Se aparecer erro 403

Significa que `public_html` está vazio. Faça:

1. No Git do hPanel, confirme branch **`hostinger`**
2. Clique em **Redeploy**
3. No hPanel, pesquise **Fix File Ownership** e execute
4. Verifique no Gerenciador de arquivos se existem:
   - `public_html/index.html`
   - `public_html/assets/`

## Branch errada = site quebrado

| Branch | O que acontece |
|--------|----------------|
| `main` | Código-fonte (não funciona) |
| `hostinger` | Site compilado (correto) |
