import type { MetadataRoute } from "next";
import { getAllArticles, getCategories } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/articles",
  "/categories",
  "/note",
  "/free-gift",
  "/profile",
  "/contact",
  "/privacy",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articleRoutes = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00+09:00`),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const categoryRoutes = getCategories().map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...categoryRoutes,
    ...articleRoutes,
  ];
}
