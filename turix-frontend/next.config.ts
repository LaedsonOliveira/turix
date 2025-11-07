import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        domains: [
            'images.unsplash.com',
            'plus.unsplash.com',
            'example.com' // adicione outros domínios se precisar
        ],
        formats: ['image/webp', 'image/avif'], // formatos otimizados
    },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
