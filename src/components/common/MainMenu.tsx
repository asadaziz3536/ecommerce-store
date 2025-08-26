import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils"; // optional: for custom className merging
import { Link, useNavigate } from "react-router-dom"; // or "next/link" if using Next.js
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "../ui/button";

interface Props {
  onClose: () => void;
}

export const MainMenu = ({ onClose }: Props) => {

 const navigate= useNavigate();
  return (
    <nav
      className="px-4 py-2 fixed  left-0 top-0 bg-white w-[300px] h-[100%] md:bg-transparent md:w-[auto] md:h-[auto]
    md:relative"
    >
      <div className="logo visiblity md:hidden">
        <img
          alt=""
          src="data:image/svg+xml,%3csvg%20width='53'%20height='43'%20viewBox='0%200%2053%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M37.5%2027.0752C37.5%2020.4478%2032.1274%2015.0752%2025.5%2015.0752H15.5V27.0752H25.5V42.0752H37.5V27.0752Z'%20fill='%23FF4D00'%3e%3c/path%3e%3cpath%20d='M0.5%2028.0752C0.500001%2035.8072%206.76801%2042.0752%2014.5%2042.0752L22.5%2042.0752L22.5%2030.0752H14.5C13.3954%2030.0752%2012.5%2029.1798%2012.5%2028.0752V27.0752L0.5%2027.0752L0.5%2028.0752Z'%20fill='%23FF4D00'%3e%3c/path%3e%3cpath%20d='M25.5%200.0751953C40.4117%200.0751953%2052.5%2012.1635%2052.5%2027.0752V42.0752H40.5V27.0752C40.5%2018.7909%2033.7843%2012.0752%2025.5%2012.0752H14.5C13.3954%2012.0752%2012.5%2012.9706%2012.5%2014.0752V15.0752H0.500001V14.0752C0.500002%206.34321%206.76802%200.0751953%2014.5%200.0751953H25.5Z'%20fill='%23FF4D00'%3e%3c/path%3e%3c/svg%3e"
        />
      </div>

      <Button className="absolute md:hidden top-4 right-6" onClick={onClose}>
        <IoCloseSharp />
      </Button>

      <NavigationMenu>
        <NavigationMenuList className="flex flex-col md:flex-row  gap-4 pt-8 md:pt-0 md:pt-auto md:gap-8   h-[100%] bg-white">
          <NavigationMenuItem className="cursor-pointer" onClick={()=>navigate("/")}>
            Home
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-0 cursor-pointer">
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col md:flex-row">
              <ul className="grid gap-2 p-4 w-[200px] text-left">
                <span className="font-semibold block">Men</span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Casual Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Formal Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Jackets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Blazers & Coats
                </NavigationMenuLink>
                <span className="font-semibold block">Indi& </span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Kurts & Kurtas Sets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Sherwanis
                </NavigationMenuLink>
              </ul>
              <ul className="grid gap-2 p-4 w-[200px]">
                <span className="font-semibold block">Women</span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Casual Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Formal Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Jackets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Blazers & Coats
                </NavigationMenuLink>
                <span className="font-semibold block">Indi& </span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Kurts & Kurtas Sets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Sherwanis
                </NavigationMenuLink>
              </ul>

              <ul className="grid gap-2 p-4 w-[200px]">
                <span className="font-semibold block">Footwear</span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Casual Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Formal Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Jackets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Blazers & Coats
                </NavigationMenuLink>
                <span className="font-semibold block">Product Features </span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Kurts & Kurtas Sets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Sherwanis
                </NavigationMenuLink>
              </ul>

              <ul className="grid gap-2 p-4 w-[200px]">
                <span className="font-semibold block">Kids</span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Casual Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Formal Shirts
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Jackets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Blazers & Coats
                </NavigationMenuLink>
                <span className="font-semibold block">Product Features </span>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Kurts & Kurtas Sets
                </NavigationMenuLink>
                <NavigationMenuLink className="px-0 cursor-pointer">
                  Sherwanis
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer">
            Our story
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            Blog
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            Contact Us
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
