# Configurar GitHub Pages com Domínio Customizado no Cloudflare

Este guia explica como conectar o GitHub Pages com um domínio customizado gerenciado no Cloudflare.

## Visão Geral

O processo envolve duas partes principais:
1. **Configurar o domínio customizado no GitHub Pages**
2. **Configurar os registros DNS no Cloudflare**

## Passo 1: Configurar Domínio Customizado no GitHub Pages

### 1.1 Habilitar GitHub Pages

1. Vá em **Settings** > **Pages** no seu repositório GitHub
2. Em **Source**, selecione **GitHub Actions**
3. Salve as configurações

### 1.2 Adicionar Domínio Customizado

1. Na mesma página **Settings** > **Pages**
2. Em **Custom domain**, digite seu domínio (ex: `resolu.app` ou `www.resolu.app`)
3. Clique em **Save**
4. O GitHub irá verificar o DNS e criar um arquivo `CNAME` no repositório

**Importante:** 
- Para domínio raiz (`resolu.app`): GitHub usa um registro `A` (não CNAME)
- Para subdomínio (`www.resolu.app`): GitHub usa um registro `CNAME`

## Passo 2: Configurar DNS no Cloudflare

### 2.1 Para Domínio Raiz (resolu.app)

Se você quer usar `resolu.app` (sem www), configure:

#### Opção A: Usando Registros A (Recomendado)

1. Acesse o **Cloudflare Dashboard** > Selecione seu domínio
2. Vá em **DNS** > **Records**
3. Adicione/Edite os seguintes registros:

| Tipo | Nome | Conteúdo | Proxy | TTL |
|------|------|----------|-------|-----|
| A | @ | `185.199.108.153` | 🟠 Proxied | Auto |
| A | @ | `185.199.109.153` | 🟠 Proxied | Auto |
| A | @ | `185.199.110.153` | 🟠 Proxied | Auto |
| A | @ | `185.199.111.153` | 🟠 Proxied | Auto |

**IPs do GitHub Pages (atualizados em 2024):**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**Nota:** Use **Proxied** (laranja) para ativar o CDN do Cloudflare e proteger os IPs.

#### Opção B: Usando CNAME Flattening (Alternativa)

Se o Cloudflare suportar CNAME flattening:

| Tipo | Nome | Conteúdo | Proxy | TTL |
|------|------|----------|-------|-----|
| CNAME | @ | `[seu-usuario].github.io` | 🟠 Proxied | Auto |

### 2.2 Para Subdomínio (www.resolu.app)

Se você quer usar `www.resolu.app`:

| Tipo | Nome | Conteúdo | Proxy | TTL |
|------|------|----------|-------|-----|
| CNAME | www | `[seu-usuario].github.io` | 🟠 Proxied | Auto |

**Exemplo:** Se seu repositório é `username/resolu.app`, o conteúdo seria `username.github.io`

### 2.3 Configuração SSL/TLS no Cloudflare

1. Vá em **SSL/TLS** > **Overview**
2. Certifique-se que está em **Full** ou **Full (strict)**
3. Isso garante que o tráfego entre Cloudflare e GitHub seja criptografado

**Recomendação:** Use **Full (strict)** se possível, mas **Full** também funciona.

### 2.4 Configurações Adicionais Recomendadas

#### Page Rules (Opcional)

Crie uma Page Rule para garantir HTTPS:

1. **SSL/TLS** > **Edge Certificates** > **Always Use HTTPS**: **On**
2. Isso força redirecionamento HTTP → HTTPS

#### Cache (Opcional)

Para melhor performance:

1. **Caching** > **Configuration**
2. Configure cache rules para assets estáticos (`.js`, `.css`, `.png`, etc.)

## Passo 3: Atualizar Configuração do Vite

Atualize o `vite.config.ts` para usar o domínio raiz:

```typescript
// Para domínio customizado na raiz, use '/'
const base = process.env.GITHUB_PAGES === 'true' ? '/' : '/'
```

## Passo 4: Verificação

### 4.1 Verificar DNS

Use ferramentas online para verificar:

```bash
# Verificar registros A
dig resolu.app +short

# Verificar CNAME (se usar www)
dig www.resolu.app +short

# Verificar propagação
nslookup resolu.app
```

### 4.2 Verificar no GitHub

1. Vá em **Settings** > **Pages**
2. O domínio deve aparecer como **Verified** ✅
3. Se aparecer "Unverified", aguarde alguns minutos para propagação DNS

### 4.3 Testar Acesso

1. Acesse `https://resolu.app` no navegador
2. Deve carregar a landing page
3. Verifique se o certificado SSL está válido (cadeado verde)

## Troubleshooting

### Domínio não verifica no GitHub

**Problema:** GitHub mostra "Unverified" mesmo após configurar DNS

**Soluções:**
1. Aguarde até 24 horas para propagação DNS completa
2. Verifique se os IPs estão corretos (podem mudar)
3. Verifique se o Cloudflare está com proxy ativado (pode causar delay)
4. Tente desativar temporariamente o proxy no Cloudflare para teste

### Erro 404 ou página não carrega

**Problema:** Domínio resolve mas mostra 404

**Soluções:**
1. Verifique se o `base` no `vite.config.ts` está correto (`'/'` para domínio raiz)
2. Verifique se o deploy do GitHub Actions foi bem-sucedido
3. Verifique se o arquivo `CNAME` foi criado no repositório (deve conter apenas o domínio)

### Certificado SSL inválido

**Problema:** Navegador mostra erro de certificado

**Soluções:**
1. No Cloudflare, certifique-se que SSL/TLS está em **Full** ou **Full (strict)**
2. Aguarde alguns minutos após configurar (certificado precisa ser gerado)
3. Limpe cache do navegador

### Redirecionamento infinito

**Problema:** Página fica redirecionando infinitamente

**Soluções:**
1. Desative temporariamente "Always Use HTTPS" no Cloudflare
2. Verifique se há conflito entre configurações do Cloudflare e GitHub
3. Verifique se o domínio está configurado corretamente no GitHub Pages

## Configuração Completa - Exemplo

### Cloudflare DNS Records

```
Tipo: A
Nome: @
Conteúdo: 185.199.108.153
Proxy: Proxied
TTL: Auto

Tipo: A
Nome: @
Conteúdo: 185.199.109.153
Proxy: Proxied
TTL: Auto

Tipo: A
Nome: @
Conteúdo: 185.199.110.153
Proxy: Proxied
TTL: Auto

Tipo: A
Nome: @
Conteúdo: 185.199.111.153
Proxy: Proxied
TTL: Auto
```

### GitHub Pages Settings

```
Custom domain: resolu.app
Enforce HTTPS: ✅ (ativado após verificação)
```

### Vite Config

```typescript
const base = process.env.GITHUB_PAGES === 'true' ? '/' : '/'
```

## Notas Importantes

1. **Propagação DNS:** Pode levar de alguns minutos até 24 horas
2. **IPs do GitHub:** Podem mudar, verifique sempre a documentação oficial
3. **Proxy Cloudflare:** Recomendado para proteção e performance, mas pode causar pequenos delays
4. **SSL:** GitHub fornece certificado Let's Encrypt automaticamente após verificação DNS
5. **CNAME File:** GitHub cria automaticamente um arquivo `CNAME` na raiz do repositório

## Referências

- [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Cloudflare DNS Management](https://developers.cloudflare.com/dns/manage-dns-records/)
- [GitHub Pages IPs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
