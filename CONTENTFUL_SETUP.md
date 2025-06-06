# Configuração do Contentful para Draft Mode

Este guia mostra como configurar o Contentful para funcionar com o Draft Mode do Next.js.

## 1. Obter Tokens de API

### Acessar Settings > API Keys
1. No painel do Contentful, vá para **Settings** > **API keys**
2. Clique em **Add API key** ou use uma chave existente

### Copiar os Tokens Necessários
Você precisará de:
- **Space ID**: ID do seu espaço
- **Content Delivery API - access token**: Para conteúdo publicado
- **Content Preview API - access token**: Para conteúdo em rascunho

## 2. Configurar Content Preview

### Acessar Content Preview Settings
1. Vá para **Settings** > **Content preview**
2. Clique em **Add** para criar uma nova configuração

### Configurar Preview URL
Configure os seguintes campos:

**Nome**: `Next.js Draft Mode`

**Description**: `Preview de conteúdo em rascunho no Next.js`

**Content preview URLs**:
Para Blog Posts:
```
https://seu-dominio.com/api/enable-draft?secret=SEU_TOKEN_SECRETO&redirect=/blog/{entry.fields.slug}
```

Para outras páginas:
```
https://seu-dominio.com/api/enable-draft?secret=SEU_TOKEN_SECRETO&redirect={entry.fields.slug}
```

### Configurações Avançadas

**Content types**: Selecione os tipos de conteúdo que terão preview (ex: Blog Post, Page, etc.)

**Environments**: Selecione o ambiente (geralmente `master`)

## 3. Configurar Content Model

### Campos Obrigatórios
Certifique-se de que seus content types tenham:

- **slug** (Text): Para URLs amigáveis
- **title** (Text): Título do conteúdo
- **content** (Rich Text ou Long Text): Conteúdo principal

### Exemplo de Content Type "Blog Post"
```
Fields:
- title (Text, required)
- slug (Text, required, unique)
- content (Rich Text)
- publishedDate (Date & Time)
- author (Reference)
```

## 4. Testar o Preview

### No Editor do Contentful
1. Abra qualquer entrada de conteúdo
2. Clique no botão **Open preview** (ícone de olho)
3. Selecione "Next.js Draft Mode"
4. Será redirecionado para seu site com Draft Mode ativo

### Verificar se Funcionou
- A URL deve conter parâmetros do Draft Mode
- Deve aparecer uma barra indicando "Modo Rascunho Ativo"
- O conteúdo não publicado deve ser visível

## 5. Configuração para Produção

### Variáveis de Ambiente no Vercel
1. No painel do Vercel, vá para **Settings** > **Environment Variables**
2. Adicione as variáveis:

```
DRAFT_SECRET_TOKEN=seu-token-super-secreto
CONTENTFUL_SPACE_ID=seu-space-id
CONTENTFUL_DELIVERY_TOKEN=seu-delivery-token
CONTENTFUL_PREVIEW_TOKEN=seu-preview-token
CONTENTFUL_ENVIRONMENT=master
```

### Atualizar URLs de Preview
Substitua `seu-dominio.com` pela URL real do seu site:
```
https://meusite.vercel.app/api/enable-draft?secret=SEU_TOKEN_SECRETO&redirect=/blog/{entry.fields.slug}
```

## 6. Webhooks (Opcional)

### Configurar Revalidação Automática
Para revalidar páginas quando o conteúdo for publicado:

1. Vá para **Settings** > **Webhooks**
2. Clique em **Add webhook**
3. Configure:
   - **Name**: `Next.js Revalidation`
   - **URL**: `https://seu-site.com/api/revalidate`
   - **Triggers**: Entry publish, Entry unpublish

## 7. Troubleshooting

### Preview não abre
- Verifique se a URL está correta
- Confirme se o token secreto está configurado
- Teste a URL manualmente no navegador

### Conteúdo não aparece
- Verifique se o Preview API token está correto
- Confirme se o content type no código corresponde ao Contentful
- Verifique se o campo `slug` existe e está preenchido

### Erros de CORS
- Adicione seu domínio nas configurações de CORS do Contentful
- Vá para **Settings** > **API keys** > **CORS**

## 8. Exemplo de Uso

### No Contentful
1. Crie um novo post de blog
2. Preencha título, slug e conteúdo
3. **NÃO publique ainda**
4. Clique em "Open preview"
5. Veja o conteúdo em rascunho no seu site

### Para Sair do Preview
Clique no link "Sair do modo rascunho" ou acesse:
```
https://seu-site.com/api/disable-draft?redirect=/
```

## Recursos Adicionais

- [Documentação oficial do Contentful Preview](https://www.contentful.com/developers/docs/tutorials/general/live-preview/)
- [Next.js Draft Mode Documentation](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)
