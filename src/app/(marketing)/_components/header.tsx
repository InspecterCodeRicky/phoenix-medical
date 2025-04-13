"use client";

import { cn } from "@/lib/utils";

import {CalendarFold, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [largeHeader, setLargeHeader] = useState(true);

  const MenuList = [
    { libelle: "Accueil", path: "/" },
    { libelle: "Catalogue", path: "/catalogue" },
    { libelle: "Devis", path: "/devis" },
    { libelle: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 100) {
        setLargeHeader(true);
      } else {
        setLargeHeader(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resetScrollPosition = () => {
    sessionStorage.setItem("scrollPosition", "0");
  };

  return (
    <div
      className={cn(
        `bg-white  sticky top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
          largeHeader ? "p-1" : "p-2 md:p-4"
        }`
      )}
    >
      <div className="container py-5 flex justify-between items-center">
        <div className="flex items-end gap-5">
          <div
            role="button"
            onClick={() => {
              router.push("/");
              resetScrollPosition();
            }}
          >
            <Image
              className="w-full h-10 object-contain"
              src="/img/logo.png"
              width={150}
              height={40}
              alt="logo"
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          {MenuList.map((menu: any, index) => (
            <div
              key={`menu-nav-${index}`}
              role="button"
              onClick={() => {
                router.push(menu.path);
                resetScrollPosition();
              }}
              className={cn(
                `relative text-sm text-muted-foreground font-medium hover:text-primary w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                  pathname == menu.path && "text-primary after:scale-x-50"
                }`
              )}
            >
              {menu.libelle}
            </div>
          ))}
        </nav>
        <div className="flex gap-5">
          <Link href="tel:0590889758" className="flex justify-center items-center cursor-pointer rounded-full h-6 w-6 border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10">
            <Phone className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="flex justify-center items-center cursor-pointer rounded-full h-6 w-6 border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10">
            <CalendarFold className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
