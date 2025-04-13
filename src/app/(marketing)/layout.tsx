"use client";
import Header from "@/app/(marketing)/_components/header";
import Footer from "@/app/(marketing)/_components/footer";
import MenuMobile from "@/app/(marketing)/_components/menuMobile";
import ConfidentialityNotice from "@/app/(marketing)/_strates/ConfidentialityNotice";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      <Header />
      {children}

      <MenuMobile />
      <Footer />
      <ConfidentialityNotice />
    </div>
  );
};

export default MainLayout;
