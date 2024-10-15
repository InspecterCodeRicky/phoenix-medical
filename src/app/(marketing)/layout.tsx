"use client";

import { useConvexAuth } from "convex/react";

import { Spinner } from "@/components/spinner";
import { redirect, usePathname } from "next/navigation";
import Header from "@/app/(marketing)/_components/header";
import Footer from "@/app/(marketing)/_components/footer";
import MenuMobile from "@/app/(marketing)/_components/menuMobile";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const pathname = usePathname();

  const statusApp = process.env.CURRENT_APP_STATUS;

  if (statusApp !== "live" && isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="lg" />
      </div>
    );
  }
  if (
    !isAuthenticated &&
    statusApp !== "live" &&
    !pathname.includes("/sign-in")
  ) {
    console.log("isAuthenticated 2", isAuthenticated);
    redirect("/sign-in");
  }

  return (
    <div className="relative">
      {(isAuthenticated && statusApp !== "live") || statusApp == "live" ? (
        <Header />
      ) : null}
      {children}

      {(isAuthenticated && statusApp !== "live") || statusApp == "live" ? (
        <>
          <MenuMobile />
          <Footer />
        </>
      ) : null}
    </div>
  );
};

export default MainLayout;
