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

export type UserData = {
  role: "instructor" | "student" | "admin";
  profilePicture?: string;
};

function MainNav({ children }: { children?: React.ReactNode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loginSession, setLoginSession] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState<UserData | null>(null);

  const items = navLinks;

  // setLoginSession not Working

  useEffect(() => {
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
  }, []);

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
        {!loginSession && <NavAuth />}

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
