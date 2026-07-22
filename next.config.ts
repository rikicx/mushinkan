import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contatos", destination: "/contato", permanent: true },
      {
        source: "/horarios",
        destination: "/aulas-e-horarios#horarios",
        permanent: true
      },
      {
        source: "/instrutores",
        destination: "/o-dojo#instrutores",
        permanent: true
      },
      {
        source: "/inicio-no-karate",
        destination: "/o-dojo#instrutores",
        permanent: true
      },
      {
        source: "/marcio-adami-santos",
        destination: "/o-dojo#instrutores",
        permanent: true
      },
      {
        source: "/alexandre-rollo",
        destination: "/o-dojo#instrutores",
        permanent: true
      },
      {
        source: "/henri-kenzo-taniguti",
        destination: "/o-dojo#instrutores",
        permanent: true
      },
      {
        source: "/leandro-romero",
        destination: "/o-dojo#instrutores",
        permanent: true
      },
      {
        source: "/metodologia",
        destination: "/karate-shotokan#metodo",
        permanent: true
      },
      {
        source: "/aquecimento",
        destination: "/karate-shotokan#metodo",
        permanent: true
      },
      {
        source: "/kihon",
        destination: "/karate-shotokan#metodo",
        permanent: true
      },
      {
        source: "/kata",
        destination: "/karate-shotokan#metodo",
        permanent: true
      },
      {
        source: "/kumite",
        destination: "/karate-shotokan#metodo",
        permanent: true
      },
      { source: "/artigos", destination: "/conteudos", permanent: true },
      {
        source: "/glossario",
        destination: "/karate-shotokan",
        permanent: true
      },
      {
        source: "/o-que-e-o-karate",
        destination: "/conteudos/o-que-e-o-karate",
        permanent: true
      },
      {
        source: "/beneficios-do-karate",
        destination: "/conteudos/beneficios-do-karate",
        permanent: true
      },
      {
        source: "/niju-kun",
        destination: "/conteudos/niju-kun",
        permanent: true
      },
      { source: "/depoimentos", destination: "/#avaliacoes", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true }
    ];
  }
};

export default nextConfig;
