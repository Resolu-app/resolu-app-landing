# Imagem Open Graph (OG Image)

Para o preview animado funcionar no WhatsApp e outras redes sociais, você precisa criar uma imagem `og-image.png` na pasta `public/`.

## Especificações

- **Tamanho**: 1200x630px (proporção 1.91:1)
- **Formato**: PNG ou JPG
- **Localização**: `landing/public/og-image.png`
- **URL**: Será acessível em `https://resolu.app/og-image.png` após deploy

## Conteúdo Sugerido

A imagem deve conter:
- Logo do Resolu.app
- Título: "Transforme suas resoluções em realidade"
- Subtítulo: "Planejamento anual com IA"
- Visual atrativo e profissional

## Ferramentas para Criar

- [Canva](https://www.canva.com/) - Templates prontos para OG Images
- [Figma](https://www.figma.com/) - Design customizado
- [Bannerbear](https://www.bannerbear.com/) - Geração automática

## Testar

Após criar a imagem e fazer deploy:

1. **WhatsApp**: Envie o link para você mesmo e verifique o preview
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Nota

A URL da imagem deve ser absoluta (começar com `https://`) para funcionar corretamente no WhatsApp.
