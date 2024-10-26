"use client";

import { SignOutButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";
import { LogOut } from "lucide-react";


import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
 

  useEffect(() => {
    // Cette logique est exécutée seulement côté client
    require("@/lib/surchagePrototypes");
  }, []);

  

  return (
    <main className="w-full">
      <div className="h-full bg-zinc-50 overflow-clip">
        <div className="flex justify-between items-center sticky top-0 w-full h-[52px] bg-white z-10 px-2">
          <SidebarTrigger />
          <Authenticated>
            <SignOutButton redirectUrl={process.env.NEXT_PUBLIC_APP_PATH_ADMIN}>
              <div className="flex justify-center items-center cursor-pointer rounded-full h-6 w-6 border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10">
                <LogOut className="h-3 w-3"/>
              </div>
            </SignOutButton>
          </Authenticated>
        </div>
        <Separator />
        <div className="h-[calc(100%-52px)]">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
