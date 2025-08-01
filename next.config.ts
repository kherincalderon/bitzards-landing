/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...otras configuraciones que ya puedas tener
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '**', // Permite cualquier ruta de imagen de este dominio
      },
    ],
  },
};

module.exports = nextConfig;
