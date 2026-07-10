import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://presently.app",
      priority: 1,
      changeFrequency: "weekly",
    },
  ];
}