import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import type { MetadataRoute } from "next";

const fetchData = async () => {
  const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const products = await client.query(api.catalogue.list);
  return products;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BaseUrl = "https://phoenixmedical.fr";

  const products = await fetchData();

  const SMproducts = products.map((item) => {
    return {
      url: `${BaseUrl}/${item._id}`,
      lastModified: new Date(item._creationTime),
    };
  });

  return [
    {
      url: BaseUrl,
      lastModified: new Date(),
    },
    {
      url: `${BaseUrl}/catalogue`,
      lastModified: new Date(),
    },
    {
      url: `${BaseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${BaseUrl}/devis`,
      lastModified: new Date(),
    },
    ...SMproducts,
  ];
}
