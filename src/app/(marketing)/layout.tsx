"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";

import { redirect, usePathname } from "next/navigation";
import Header from "./_components/header";
import Footer from "./_components/footer";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const pathname = usePathname();

  if (process.env.NODE_ENV == "development" && isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner size="lg" />
      </div>
    );
  }
  if (
    !isAuthenticated &&
    process.env.NODE_ENV == "development" &&
    !pathname.includes("/sign-in")
  ) {
    console.log("isAuthenticated 2", isAuthenticated);
    redirect("/sign-in");
  }

  return (
    <div>
      {(isAuthenticated && process.env.NODE_ENV == "development") ||
      process.env.NODE_ENV != "development" ? (
        <Header />
      ) : null}

      {children}

      {(isAuthenticated && process.env.NODE_ENV == "development") ||
      process.env.NODE_ENV != "development" ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default MainLayout;
