"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="md:container mt-36 md:mb-5">
      <div className="bg-primary md:rounded-xl">
        <div className="container py-10">
          <div className="max-w-48">
            <Image
              className="lg:hidden block mb-10 w-full h-full object-contain"
              src="/img/logo-white.png"
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {/* Services */}
            <div className="flex flex-col gap-3">
              <p className="text-white font-semibold">Services</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/catalogue"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/catalogue" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Catalogue
                </Link>
                <Link
                  href="/devis"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/devis" && "text-white after:scale-x-100"
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
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/contact" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/contact" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
            <Image
              className="hidden lg:block w-full h-full object-contain"
              src="/img/logo-white.png"
              width={200}
              height={200}
              alt="logo"
            />
            {/* Réseaux sociaux */}
            <div className="flex flex-col gap-3 lg:items-end">
              <p className="text-white font-semibold">Réseaux sociaux</p>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="https://www.instagram.com/phoenix.medical.gpe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/instagram" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61566455577776"
                  target="_blank"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/facebook" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/company/sas-phoenix-medical/?viewAsMember=true"
                  target="_blank"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/facebook" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Linkedin
                </Link>
                <Link
                  href="https://www.tiktok.com/@phoenix_medical?_t=ZN-8wWLUeykEty&_r=1"
                  target="_blank"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/facebook" && "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Tiktok
                </Link>
              </div>
            </div>
            {/* Mentions legales */}
            <div className="flex flex-col gap-3 lg:items-end">
              <p className="text-white font-semibold">Mentions légales</p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/conditions-generales"
                  className={cn(
                    `relative text-sm text-white font-medium hover:text-white w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                      pathname == "/conditions-generale" &&
                      "text-white after:scale-x-100"
                    }`
                  )}
                >
                  Conditions Générales
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-white font-semibold">
            Copyright © {new Date().getFullYear()} Tous droits réservés | Ideal Conception ❤️ | Phoenix Médical 👌
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
