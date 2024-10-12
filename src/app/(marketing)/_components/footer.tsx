"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const MenuList = [
    { libelle: "Accueil", path: "/" },
    { libelle: "Catalogue", path: "/catalogue" },
    { libelle: "Devis", path: "/devis" },
    { libelle: "Contact", path: "/contact" },
  ];
  const pathname = usePathname();

  return (
    <div className="md:container mt-36 md:mb-5">
      <div className="bg-[#0E0E0E] md:rounded-xl">
        <div className="container py-10">
          <Image
            className="lg:hidden block mb-10"
            src="/img/logo-white.png"
            width={200}
            height={200}
            alt="logo"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {/* Services */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">Services</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/catalogue"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/catalogue" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Catalogue
                </Link>
                <Link
                  href="/devis"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/devis" && "text-white after:scale-x-50"
                    }`
                  )}
                >
                  Devis
                </Link>
              </div>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">Contactez-nous</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/contact" && "text-white after:scale-x-50"
                    }`
                  )}
                >
                  Contact
                </Link>
                <Link
                  href="/prise-rdv"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/prise-rdv" && "text-white after:scale-x-50"
                    }`
                  )}
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>

            <Image
              className="hidden lg:block"
              src="/img/logo-white.png"
              width={200}
              height={200}
              alt="logo"
            />
            {/* Réseaux sociaux */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">Réseaux sociaux</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/contact" && "text-white after:scale-x-50"
                    }`
                  )}
                >
                  Instagram
                </Link>
                <Link
                  href="/prise-rdv"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/prise-rdv" && "text-white after:scale-x-50"
                    }`
                  )}
                >
                  Facebook
                </Link>
              </div>
            </div>
            {/* Mentions legales */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">Mentions légales</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/conditions-generales"
                  className={cn(
                    `relative text-sm text-muted-foreground font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/contact" && "text-white after:scale-x-50"
                    }`
                  )}
                >
                  Conditions Générales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
