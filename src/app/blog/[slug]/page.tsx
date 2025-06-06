import { draftMode } from 'next/headers';
import { getContentfulClient, BlogPostSkeleton } from '@/libs/contentful';
import { notFound } from 'next/navigation';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const { isEnabled } = draftMode();
  const client = getContentfulClient(isEnabled);

  try {
    // Buscar post pelo slug
    const response = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost', // Ajuste para seu content type
      'fields.slug': params.slug,
      limit: 1,
    });

    if (!response.items.length) {
      return notFound();
    }

    const post = response.items[0];
    const { title, content } = post.fields;

    return (
      <article className="max-w-4xl mx-auto py-8 px-4">
        {isEnabled && (
          <div className="bg-yellow-100 p-4 mb-4 rounded-lg">
            🚧 Visualizando em modo rascunho
            <a 
              href={`/api/disable-draft?redirect=/blog/${params.slug}`}
              className="ml-4 text-blue-600 hover:underline"
            >
              Sair do modo rascunho
            </a>
          </div>
        )}
        
        <h1 className="text-4xl font-bold mb-6">{String(title)}</h1>
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: String(content) }} />
        </div>
      </article>
    );
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return notFound();
  }
}

// Gerar rotas estáticas para posts publicados
export async function generateStaticParams() {
  const client = getContentfulClient(false); // Usar cliente de produção

  try {
    const response = await client.getEntries<BlogPostSkeleton>({
      content_type: 'blogPost', // Ajuste para seu content type
    });

    return response.items.map((post) => ({
      slug: String(post.fields.slug),
    }));
  } catch (error) {
    console.error('Erro ao gerar rotas estáticas:', error);
    return [];
  }
}
