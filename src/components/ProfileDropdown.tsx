import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { UserData } from "./MainNav";
import SignOutBtn from "./SignOutBtn";
import { Session } from "next-auth";

const ProfileDropdown = ({
  loggedInUser,
  loginSession,
}: {
  loggedInUser: UserData | null;
  loginSession: Session | null;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage src={loggedInUser?.profilePicture} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-4">
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="/account">Profile</Link>
        </DropdownMenuItem>
        {loggedInUser?.role === "instructor" && (
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="/account/enrolled-courses">My Courses</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href="">Testimonials & Certificates</Link>
        </DropdownMenuItem>

        {loginSession && <SignOutBtn />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileDropdown;
