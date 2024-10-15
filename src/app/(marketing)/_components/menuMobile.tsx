import { AlignJustify } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuMobile = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();

  const MenuList = [
    { libelle: "Accueil", path: "/" },
    { libelle: "Catalogue", path: "/catalogue" },
    { libelle: "Devis", path: "/devis" },
    { libelle: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      {!isDesktop && (
        <div className="fixed bottom-3 right-2 bg-white drop-shadow-xl h-12 px-4 rounded-full flex items-center justify-center">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <div className="flex gap-3">
                {/* Animation de l'icône en fonction de l'état ouvert/fermé */}
                <AlignJustify
                  strokeWidth={1.6}
                  className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
                />
                <p className="font-semibold">Menu</p>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col gap-2 p-6">
                {MenuList.map((menu, index) => (
                  <Link
                    onClick={()=> {setOpen(false)}}
                    key={`menu-nav-${index}`}
                    href={menu.path}
                    className={cn(
                      `relative text-sm text-muted-foreground font-medium hover:text-primary w-fit transition-all block after:block after:content-[''] after:rounded-full after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                        pathname === menu.path &&
                        "text-primary after:scale-x-100"
                      }`
                    )}
                  >
                    {menu.libelle}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
