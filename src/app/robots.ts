import type { MetadataRoute } from "next";
import { siteInfo } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin-prototype/"
    },
    sitemap: `${siteInfo.siteUrl}/sitemap.xml`,
    host: siteInfo.siteUrl
  };
}
