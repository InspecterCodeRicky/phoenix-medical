import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BaseUrl = "https://phoenixmedical.fr";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/catalogue", "/contact", "/devis"],
      disallow: ["/admin/"],
    },
    sitemap: `${BaseUrl}/sitemap.xml`,
  };
}
