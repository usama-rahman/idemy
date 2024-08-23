import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";
import { SessionProvider } from "next-auth/react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <SessionProvider>
          <div className="container flex h-20 items-center justify-between py-6 ">
            <MainNav />
          </div>
        </SessionProvider>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
