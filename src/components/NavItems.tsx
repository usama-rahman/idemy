import navLinks from "@/lib/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavItems = () => {
  const items = navLinks;

  return (
    <>
      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
};

export default NavItems;
