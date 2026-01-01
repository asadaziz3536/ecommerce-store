import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import logo from "@/assets/images/site-logo.svg";

import { useSidebar } from "@/components/ui/sidebar";
import { useEffect } from "react";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfully!");
      })
      .catch((error) => toast.error("Unable to log out. Please try again."));
  };
  const checkMobile = () => {
    if (window.innerWidth < 767) {
      toggleSidebar();
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="flex justify-between w-full bg-white fixed top-0  py-3 px-4 border-b z-50">
      <div className="logo" onClick={checkMobile}>
        <img src={logo} alt="" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleClick}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
