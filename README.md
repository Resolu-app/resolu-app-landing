# Resolu.app Landing Page

Landing page moderna e enxuta para o Resolu.app.

## Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool rápida
- **Tailwind CSS v4** - Estilização
- **Lucide React** - Ícones

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

A aplicação roda em `http://localhost:5174`

## Estrutura

```
landing/
├── src/
│   ├── App.tsx       # Componente principal
│   ├── main.tsx      # Entry point
│   └── index.css     # Estilos globais
├── index.html        # HTML base
├── vite.config.ts    # Configuração do Vite
└── package.json      # Dependências
```

## Features

- ✅ Design responsivo
- ✅ Dark mode (via Tailwind)
- ✅ Seção destacada de IA
- ✅ Menciona recursos futuros (compartilhamento e competição)
- ✅ Performance otimizada com Vite
- ✅ Deploy automático no GitHub Pages

## Deploy

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

**Configuração necessária:**
1. Vá em **Settings** > **Pages** no repositório
2. Selecione **GitHub Actions** como source
3. O deploy acontece automaticamente em pushes para `main`/`master`

Para mais detalhes, veja [DEPLOY.md](./DEPLOY.md).
