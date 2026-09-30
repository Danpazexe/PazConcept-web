import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  // Cada sistema tem o próprio site de apresentação: a página antiga redireciona para ele.
  async redirects() {
    return [
      { source: "/elaraspace", destination: "https://elaraspace.pazconcept.com.br", permanent: true },
      { source: "/pitspace", destination: "https://pitspace.pazconcept.com.br", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
