"use client";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect, usePathname } from "next/navigation";

import MainLayout from "@/app/admin/_components/main";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const RootAdmin = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();

  const { isAuthenticated, isLoading } = useConvexAuth();

  const signInPath = process.env.NEXT_PUBLIC_APP_PATH_ADMIN + "/sign-in";

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="lg" />
      </div>
    );
  }
  if (!isAuthenticated && !pathname.includes(signInPath)) {
    redirect(signInPath);
  }
  return (
    <SidebarProvider className="h-screen">
      {isAuthenticated && <AppSidebar />}
      {isAuthenticated ? <MainLayout> {children} </MainLayout> : children}
    </SidebarProvider>
  );
};

export default RootAdmin;
