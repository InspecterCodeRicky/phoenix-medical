"use client";

import { cn } from "@/lib/utils";

import { SignOutButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";

import { AlignJustify, CalendarFold, LogOut, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const pathname = usePathname();
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

  const MenuBurger = () => {
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);

    return (
      <div className="flex items-center md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="">
            <AlignJustify strokeWidth={1.6} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <Image src="/img/logo.png" width={120} height={120} alt="logo" />
            </SheetHeader>
            <div className="flex flex-col gap-5 mt-10">
              {MenuList.map((menu: any, index) => (
                <Link
                  key={`menu-nav-${index}`}
                  href={menu.path}
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-primary w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == menu.path && "text-primary after:scale-x-100"
                    }`
                  )}
                >
                  {menu.libelle}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
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
          {/* <MenuBurger /> */}
          <Link href="/">
            <Image src="/img/logo.png" width={120} height={120} alt="logo" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          {MenuList.map((menu: any, index) => (
            <Link
              key={`menu-nav-${index}`}
              href={menu.path}
              className={cn(
                `relative text-sm text-muted-foreground font-medium hover:text-primary w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                  pathname == menu.path && "text-primary after:scale-x-50"
                }`
              )}
            >
              {menu.libelle}
            </Link>
          ))}
        </nav>
        <div className="flex gap-5">
          <div className="flex justify-center items-center cursor-pointer rounded-full h-6 w-6 border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10">
            <Phone className="h-4 w-4" />
          </div>
          <div className="flex justify-center items-center cursor-pointer rounded-full h-6 w-6 border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10">
            <CalendarFold className="h-4 w-4" />
          </div>
          <Authenticated>
            <SignOutButton>
              {/* <UserButton /> */}
              <div className="flex justify-center items-center cursor-pointer rounded-full h-6 w-6 border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10">
                <LogOut className="h-3 w-3" />
              </div>
            </SignOutButton>
          </Authenticated>
        </div>
      </div>
    </div>
  );
};

export default Header;
