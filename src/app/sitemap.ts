import type { MetadataRoute } from "next";
import { contentPosts } from "@/data/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/o-dojo`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteUrl}/aulas-e-horarios`,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/karate-shotokan`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/conteudos`,
      changeFrequency: "monthly",
      priority: 0.7
    },
    { url: `${siteUrl}/contato`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.6 }
  ];

  const articles: MetadataRoute.Sitemap = contentPosts.map((post) => ({
    url: `${siteUrl}${post.href}`,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...pages, ...articles];
}
