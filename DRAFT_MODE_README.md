# Draft Mode com Contentful - Next.js

Este projeto possui o Draft Mode configurado para visualizar conteúdo em rascunho do Contentful antes da publicação.

## Arquivos Criados/Modificados

### 1. `/src/app/api/enable-draft/route.ts` e `/src/app/api/disable-draft/route.ts`
Rotas para habilitar/desabilitar o Draft Mode.

### 2. `/src/libs/contentful.ts`
Cliente do Contentful configurado para suportar modo preview.

### 3. `.env.local`
Arquivo de configuração com tokens do Contentful e Draft Mode.

## Configuração

### 1. Configurar Variáveis de Ambiente
Copie o arquivo `.env.local.example` para `.env.local` e configure:

```env
# Draft Mode
DRAFT_SECRET_TOKEN=seu-token-secreto

# Contentful
CONTENTFUL_SPACE_ID=seu-space-id
CONTENTFUL_DELIVERY_TOKEN=seu-delivery-token
CONTENTFUL_PREVIEW_TOKEN=seu-preview-token
CONTENTFUL_ENVIRONMENT=master
```

### 2. Configurar Contentful Preview
1. No Contentful, vá para Settings > Content Preview
2. Adicione uma nova configuração:
   - Nome: "Next.js Draft Mode"
   - URL: `https://seu-site.com/api/enable-draft?secret={DRAFT_SECRET_TOKEN}&slug={entry.fields.slug}&redirect=/blog/{entry.fields.slug}`

## Como Usar

### 1. Visualizar Conteúdo em Rascunho
No Contentful:
1. Edite um post
2. Clique em "Open Preview" para ver o conteúdo em rascunho
3. Será redirecionado para seu site com Draft Mode ativo

### 2. Sair do Modo Rascunho
Clique no link "Sair do modo rascunho" na barra de preview ou acesse:
```
GET /api/disable-draft?redirect=/blog/seu-slug
```

### 3. Implementação em Páginas
Exemplo de uso em uma página:

```typescript
import { draftMode } from 'next/headers';
import { getContentfulClient, BlogPostSkeleton } from '@/libs/contentful';

export default async function BlogPost({ params }) {
  const { isEnabled } = draftMode();
  const client = getContentfulClient(isEnabled);
  
  const response = await client.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  // ... resto do código
}
```

## Tipos do Contentful

### Definindo Tipos para Entradas
Em `/src/libs/contentful.ts`:

```typescript
export interface BlogPostFields {
  title: contentful.EntryFieldTypes.Text;
  content: contentful.EntryFieldTypes.Text;
  slug: contentful.EntryFieldTypes.Text;
}

export interface BlogPostSkeleton extends contentful.EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
}
```

## Segurança

- Mantenha todos os tokens seguros
- Use diferentes tokens para desenvolvimento/produção
- Configure variáveis de ambiente no Vercel
- Não compartilhe tokens em repositórios públicos

## Troubleshooting

### Preview não funciona
- Verifique se os tokens do Contentful estão corretos
- Confirme se a URL de preview está configurada corretamente
- Verifique se o content type no código corresponde ao do Contentful

### Erros de TypeScript
- Certifique-se de usar os tipos corretos do Contentful
- Verifique se os campos correspondem ao seu content model
- Use `String()` para garantir que os campos são strings

### Problemas de Renderização
- Use `dangerouslySetInnerHTML` para conteúdo rico
- Certifique-se de que os campos obrigatórios existem
- Trate casos de campos vazios ou nulos
