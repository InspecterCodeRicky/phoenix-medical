"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./(marketing)/_components/header";
import Footer from "./(marketing)/_components/footer";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="h-[60vh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-medium inline-block">404</h1>
          <div>
            <h2 className="text-base font-normal m-0 leading-[49px]">
              Cette page est introuvable.
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">Retournez à l'accueil</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NotFound;
