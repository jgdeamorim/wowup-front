/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para desenvolvimento com Draft Mode
  // Removido 'output: export' para permitir rotas de API dinâmicas
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
};

export default nextConfig;
