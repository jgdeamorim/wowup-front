import * as contentful from 'contentful';

// Tipos para os campos do blog post
export interface BlogPostFields {
  title: contentful.EntryFieldTypes.Text;
  content: contentful.EntryFieldTypes.Text;
  slug: contentful.EntryFieldTypes.Text;
}

// Skeleton type para o blog post
export interface BlogPostSkeleton extends contentful.EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: BlogPostFields;
}

// Tipo para entrada do blog post
export type BlogPostEntry = contentful.Entry<BlogPostSkeleton>;

// Cliente para conteúdo publicado
export const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// Cliente para conteúdo em preview/draft
export const contentfulPreviewClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  host: 'preview.contentful.com',
});

// Função para obter o cliente correto baseado no modo draft
export function getContentfulClient(preview: boolean = false) {
  return preview ? contentfulPreviewClient : contentfulClient;
}
