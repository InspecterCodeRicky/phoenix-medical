"use client";

import { products } from "@/data/products";
import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CardProduct from "@/app/(marketing)/_components/cardProduct";
import { useMediaQuery } from "usehooks-ts";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { ConvexHttpClient } from "convex/browser";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  let product = await fetchData(params.catalogueId);
  return {
    title: product?.title,
    description: product?.shortDescription,
  };
}

const fetchData = async (catalogueId: string) => {
  const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const product = await client.query(api.catalogue.getById, {
    catalogueId: catalogueId as Id<"catalogue">,
  });
  return {
    title: product?.title,
    shortDescription: product?.shortDescription,
  };
};

const DetailsProduct = ({ catalogueId }: { catalogueId: Id<"catalogue"> }) => {
  const maxWidth = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);
  // const [product, setProduct] = useState<Doc<"catalogue">>();
  // const [similarProd, setSimilarProd] = useState<Doc<"catalogue">[]>([]);

  const router = useRouter();

  const product = useQuery(api.catalogue.getById, { catalogueId });

  const similarProd = useQuery(api.catalogue.getSimilarProdByTags, {
    catalogueId,
  });

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
      setLoading(true);
    }
  }, [product]);

  if (!loading && !product) {
    notFound();
  }

  const [favorite, setFavorite] = useState(false);

  const handleOnClick = () => {
    setFavorite(!favorite);
  };
  return (
    <div>
      {!product ? (
        <div className="grid lg:grid-cols-12 gap-5 mt-3">
          <div className="lg:col-span-8 grid lg:grid-cols-2 gap-5">
            <Skeleton className="h-44 lg:h-96 w-full" />
            <Skeleton className="hidden lg:block h-44 lg:h-96 w-full" />
            <Skeleton className="hidden lg:block h-44 lg:h-96 w-full" />
          </div>
          <div className="lg:col-span-4 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      ) : (
        <div className="md:container mt-0 flex flex-col gap-5">
          <div
            role="button"
            aria-label="back"
            onClick={() => {
              router.back();
            }}
            className="pl-2 md:pl-0 flex gap-2 items-center w-fit"
          >
            <ArrowLeft />
            <p>Retour</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-5">
            <ScrollArea className="lg:hidden block w-full whitespace-nowrap">
              <div className="flex w-max space-x-5">
                {product?.images?.map((image, index) => (
                  <div key={index} className="h-96 bg-muted max-w-80">
                    <Image
                      src={image.url}
                      width={800}
                      height={800}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="hidden lg:col-span-8 lg:grid grid-cols-2 gap-5">
              {product?.images?.map((image, index) => (
                <div key={index} className="h-44 md:h-96 bg-muted">
                  <Image
                    src={image.url}
                    width={800}
                    height={800}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className={`${maxWidth && "container"}  lg:col-span-4`}>
              <div className="flex flex-col gap-3 sticky top-28">
                <div className="flex justify-between gap-5">
                  <p className="text-lg font-bold">{product.title}</p>
                  <div
                    role="button"
                    aria-label="favorite"
                    onClick={handleOnClick}
                    className={`p-2 transition-colors duration-500 h-8 w-8 rounded-full flex justify-center items-center ${favorite ? "bg-primary" : "bg-muted"}`}
                  >
                    <Heart
                      className={cn(
                        `transition-colors duration-300 ${favorite ? "text-muted" : "text-black"}`
                      )}
                      fill={favorite ? "white" : "black"}
                    />
                  </div>
                </div>
                <p className="text-base text-muted-foreground">
                  {product.description || product.shortDescription}
                </p>
                <Button className="w-full" asChild>
                  <Link href="/devis">Demandez un devis</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Prendre un RDV</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className={`${maxWidth && "container"} flex flex-col gap-5`}>
            <div className="border rounded-lg p-4 flex flex-col gap-3">
              <p className="text-lg font-semibold">
                Caractéristiques du produit
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: product.carateristics! }}
              />
            </div>
            {!!(similarProd || []).length && (
              <div className="mt-10">
                <p className="text-3xl font-semibold">Produits similaires 😎</p>
                <p className="text-sm md:text-base text-muted-foreground md:w-1/2 mt-3">
                  Tous nos produits ne sont pas listés sur le site. Pour
                  découvrir notre gamme complète et obtenir des informations
                  détaillées, n’hésitez pas à nous contacter directement.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
                  {(similarProd || []).map((p, index) => {
                    if (index < 4) {
                      return (
                        <CardProduct
                          key={p.ref}
                          product={p}
                          goToDetails={() => {
                            router.push(`/catalogue/${p._id}`);
                          }}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsProduct;
