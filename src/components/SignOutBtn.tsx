import Link from "next/link";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";

const SignOutBtn = () => {
  return (
    <DropdownMenuItem className="cursor-pointer" asChild>
      <Link
        href="#"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </Link>
    </DropdownMenuItem>
  );
};
export default SignOutBtn;
