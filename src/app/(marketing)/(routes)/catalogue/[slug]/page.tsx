"use client";

import { products } from "@/data/products";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CardProduct from "@/app/(marketing)/_components/cardProduct";

export default function Page() {
  const pathname = usePathname();
  const ref = pathname.split("/catalogue/")[1];

  const product = products.find((el) => el.ref == ref);

  if (!product) {
    notFound();
  }

  const similarProd = products.filter(
    (el) => el.ref !== ref && el.tags.some((tag) => product.tags.includes(tag))
  );

  const [favorite, setFavorite] = useState(false);

  const handleOnClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="container mt-10 flex flex-col gap-5">
      <div className="grid md:grid-cols-12 gap-5">
        <ScrollArea className="md:hidden block w-full whitespace-nowrap">
          <div className="flex w-max space-x-5">
            {product?.images?.map((image, index) => (
              <div key={index} className="h-96 bg-muted">
                <Image
                  src={image.url}
                  width={800}
                  height={800}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {product?.images?.map((image, index) => (
              <div key={index} className="h-96 bg-muted">
                <Image
                  src={image.url}
                  width={800}
                  height={800}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {product?.images?.map((image, index) => (
              <div key={index} className="h-96 bg-muted">
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
        <div className="hidden md:col-span-8 md:grid grid-cols-2 gap-5">
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
        <div className="md:col-span-4">
          <div className="flex flex-col gap-3 sticky top-28">
            <div className="flex justify-between gap-5">
              <p className="text-lg font-bold">{product.title}</p>
              <div
                role="button"
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
              {product.description}
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
      <div className="border rounded-lg p-4 flex flex-col gap-3">
        <p className="text-lg font-semibold">Caractéristiques du produit</p>
        <div dangerouslySetInnerHTML={{ __html: product.carateristics! }} />
      </div>
      {!!similarProd.length && (
        <div className="mt-10">
          <p className="text-3xl font-semibold">Produits similaires 😎</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
            {similarProd.map((p, index) => {
              if (index < 4) {
                return <CardProduct key={p.ref} product={p} />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}
