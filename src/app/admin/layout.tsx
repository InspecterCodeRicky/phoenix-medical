
import RootAdmin from "./_components/root";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-h-screen">
      <RootAdmin>{children}</RootAdmin>
    </div>
  );
};

export default Layout;
