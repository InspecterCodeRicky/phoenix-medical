"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <div className="h-[calc(100vh-10vh)] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-medium inline-block">Attention</h1>
          <div>
            <h2 className="text-base font-normal m-0 leading-[49px]">
            Vous n'avez accès à cette ressource
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link href="/admin">Retournez à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
