# Deploy no GitHub Pages

Este projeto está configurado para fazer deploy automático no GitHub Pages através de GitHub Actions.

## Configuração Inicial

### 1. Habilitar GitHub Pages no repositório

1. Vá em **Settings** > **Pages** no seu repositório GitHub
2. Em **Source**, selecione **GitHub Actions**
3. Salve as configurações

### 2. Configurar Base Path (se necessário)

Se você estiver usando um domínio customizado ou o repositório está na raiz do domínio:

- Edite `vite.config.ts` e altere a linha:
  ```typescript
  const base = process.env.GITHUB_PAGES === 'true' ? '/' : '/'
  ```

Se o repositório está em um subdiretório (ex: `username.github.io/repo-name`):

- Mantenha como está:
  ```typescript
  const base = process.env.GITHUB_PAGES === 'true' ? '/resolu.app/' : '/'
  ```

### 3. Trigger do Deploy

O deploy acontece automaticamente quando:
- Push na branch `main` ou `master`
- Mudanças em arquivos dentro da pasta `landing/`
- Ou manualmente através de **Actions** > **Deploy Landing Page** > **Run workflow**

## Estrutura do Workflow

O workflow (`.github/workflows/deploy-landing.yml`) faz:

1. **Checkout** do código
2. **Setup pnpm** (versão 9)
3. **Setup Node.js** (versão 20)
4. **Instala dependências** (`pnpm install --frozen-lockfile`)
5. **Build** do projeto (`pnpm run build`)
6. **Upload** do artefato para GitHub Pages
7. **Deploy** automático

## URLs

Após o deploy bem-sucedido, a landing page estará disponível em:

- **GitHub Pages padrão**: `https://[seu-usuario].github.io/resolu.app/`
- **Custom domain**: Se configurado, use seu domínio personalizado

## Troubleshooting

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Confira os logs do workflow em **Actions**

### Assets não carregam
- Verifique o `base` no `vite.config.ts`
- Certifique-se que o caminho está correto para seu setup

### Deploy não acontece
- Verifique se GitHub Pages está habilitado
- Confirme que o workflow está na branch correta
- Verifique as permissões do repositório
