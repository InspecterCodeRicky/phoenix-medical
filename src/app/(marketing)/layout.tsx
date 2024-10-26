"use client";
import Header from "@/app/(marketing)/_components/header";
import Footer from "@/app/(marketing)/_components/footer";
import MenuMobile from "@/app/(marketing)/_components/menuMobile";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <div className="relative">
      {/* {(isAuthenticated && statusApp !== "live") || statusApp == "live" ? (
      ) : null} */}
      <Header />
      {children}

      <MenuMobile />
      <Footer />
      {/* {(isAuthenticated && statusApp !== "live") || statusApp == "live" ? (
        <div>
        </div>
      ) : null} */}
    </div>
  );
};

export default MainLayout;
