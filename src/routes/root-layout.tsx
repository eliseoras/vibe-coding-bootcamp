import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function RootLayout() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 flex min-h-screen w-full flex-col font-sans transition-colors duration-200">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
