"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useEffect } from "react";
import navLinks from "@/lib/navbar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import NavAuth from "./NavAuth";
import NavItems from "./NavItems";
import ProfileDropdown from "./ProfileDropdown";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
// import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export type UserData = {
  role: "instructor" | "student" | "admin";
  profilePicture?: string;
};

interface CustomSession extends Session {
  error?: string;
}

function MainNav({ children }: { children?: React.ReactNode }) {
  const { data: session } = useSession();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loginSession, setLoginSession] = useState<Session | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<UserData | null>(null);

  const items = navLinks;

  if ((session as CustomSession)?.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  useEffect(() => {
    setLoginSession(session);
    async function fetchMe() {
      try {
        const response = await fetch("/api/login");
        const data: UserData = await response.json();
        setLoggedInUser(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMe();
  }, [session]);

  return (
    <>
      <div className="flex gap-6 lg:gap-10">
        <Link href="/">
          <Logo />
        </Link>

        <NavItems />

        {showMobileMenu && items && <MobileNav>{children}</MobileNav>}
      </div>
      <nav className="flex items-center gap-3">
        {!loginSession && (
          // <NavAuth />
          <div className="items-center gap-3 hidden lg:flex">
            <Link href="/login" className={cn(buttonVariants({ size: "sm" }), "px-4")}>
              Login
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-4">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/register/student">Student</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/register/instructor">Instructor</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <ProfileDropdown loggedInUser={loggedInUser} loginSession={loginSession} />

        <button className="flex items-center space-x-2 lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <X /> : <Menu />}
        </button>
        <ModeToggle />
      </nav>
    </>
  );
}

export default MainNav;
