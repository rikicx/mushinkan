import type { MetadataRoute } from "next";
import { contentArticles, siteInfo } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/aulas-e-horarios",
      priority: 0.9,
      changeFrequency: "weekly" as const
    },
    { path: "/o-dojo", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/karate-shotokan",
      priority: 0.8,
      changeFrequency: "monthly" as const
    },
    {
      path: "/conteudos",
      priority: 0.7,
      changeFrequency: "weekly" as const
    },
    { path: "/contato", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const }
  ];

  return [
    ...pages.map((page) => ({
      url: `${siteInfo.siteUrl}${page.path}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })),
    ...contentArticles.map((article) => ({
      url: `${siteInfo.siteUrl}/conteudos/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
