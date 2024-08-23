import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import navLinks from "@/lib/navbar";
import NavAuth from "./NavAuth";

interface MobileNavProps {
  children: React.ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
  const items = navLinks;

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md border">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline")}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {/* {!loginSession && <NavAuth />} */}
        {children}
      </div>
    </div>
  );
};

export default MobileNav;
