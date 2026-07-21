import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/prestations",
        destination: "/sites-internet",
        permanent: true,
      },
      {
        source: "/temoignages",
        destination: "/realisations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
