# Draft Mode Configuration - Next.js

Este projeto agora possui o Draft Mode configurado para o Vercel. O Draft Mode permite visualizar conteúdo em rascunho antes da publicação.

## Arquivos Criados

### 1. `/src/app/api/enable-draft/route.ts`
Rota para habilitar o Draft Mode.

**Métodos disponíveis:**
- `GET /api/enable-draft?secret=TOKEN&redirect=URL`
- `POST /api/enable-draft` (com body JSON)

### 2. `/src/app/api/disable-draft/route.ts`
Rota para desabilitar o Draft Mode.

**Método disponível:**
- `GET /api/disable-draft?redirect=URL`

### 3. `.env.local`
Arquivo de configuração com o token secreto.

## Como Usar

### 1. Configurar o Token Secreto
Edite o arquivo `.env.local` e substitua `your-secret-token-here` por um token seguro:

```env
DRAFT_SECRET_TOKEN=meu-token-super-secreto-123
```

### 2. Habilitar Draft Mode
Para habilitar o Draft Mode, acesse:

```
GET /api/enable-draft?secret=meu-token-super-secreto-123&redirect=/
```

Ou via POST:

```javascript
fetch('/api/enable-draft', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    secret: 'meu-token-super-secreto-123',
    redirect: '/'
  })
})
```

### 3. Desabilitar Draft Mode
Para desabilitar o Draft Mode:

```
GET /api/disable-draft?redirect=/
```

### 4. Verificar se Draft Mode está Ativo
No seu código Next.js, você pode verificar se o Draft Mode está ativo:

```typescript
import { draftMode } from 'next/headers';

export default function MyPage() {
  const { isEnabled } = draftMode();
  
  return (
    <div>
      {isEnabled && (
        <div className="draft-banner">
          🚧 Modo Rascunho Ativo
        </div>
      )}
      {/* Seu conteúdo aqui */}
    </div>
  );
}
```

## Configuração no Vercel

1. Acesse o painel do Vercel
2. Vá para as configurações do seu projeto
3. Na seção "Draft Mode", configure:
   - **Route Handler**: `/api/enable-draft`
   - **Secret**: O mesmo token configurado no `.env.local`

## Segurança

- ⚠️ **IMPORTANTE**: Mantenha o token secreto seguro
- Não compartilhe o token em repositórios públicos
- Use tokens diferentes para desenvolvimento e produção
- Considere usar variáveis de ambiente do Vercel para produção

## Exemplo de Uso com CMS

```typescript
// Em uma página que busca dados de um CMS
import { draftMode } from 'next/headers';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  
  // Buscar dados do CMS com ou sem draft
  const post = await fetchPost(params.slug, {
    includeDrafts: isEnabled
  });
  
  return (
    <article>
      {isEnabled && (
        <div className="bg-yellow-100 p-4 mb-4">
          ⚠️ Visualizando conteúdo em rascunho
        </div>
      )}
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

## Troubleshooting

### Erro: "Cannot find module 'next/headers'"
- Certifique-se de que está usando Next.js 13+ com App Router
- Execute `npm install` para garantir que as dependências estão atualizadas

### Erro: "Invalid token"
- Verifique se o token no `.env.local` está correto
- Certifique-se de que não há espaços extras no token
- Reinicie o servidor de desenvolvimento após alterar o `.env.local`

### Draft Mode não funciona
- Verifique se as rotas estão acessíveis em `/api/enable-draft`
- Confirme que o projeto está usando App Router (`src/app/`)
- Verifique os logs do console para erros
