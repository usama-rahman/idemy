import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const NavAuth: React.FC = () => {
  return (
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
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/register/student">Student</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/register/instructor">Instructor</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavAuth;
