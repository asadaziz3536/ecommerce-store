import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import logo from "@/assets/images//logoipsum-389.svg"

interface Props {
  onClose: () => void;
}

export const MainMenu = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const [shopMenuOpen, setShopMenuOpen] = useState(false);

  const shopMenu = [
    {
      title: "Men",
      items: [
        "Casual Shirts",
        "Formal Shirts",
        "Jackets",
        "Blazers & Coats",
        "Kurts & Kurtas Sets",
        "Sherwanis",
      ],
    },
    {
      title: "Women",
      items: [
        "Casual Shirts",
        "Formal Shirts",
        "Jackets",
        "Blazers & Coats",
        "Kurts & Kurtas Sets",
        "Sherwanis",
      ],
    },
    {
      title: "Footwear",
      items: ["Casual Shoes", "Formal Shoes", "Sneakers", "Boots"],
    },
    {
      title: "Kids",
      items: ["Casual Shirts", "Formal Shirts", "Jackets", "Blazers & Coats"],
    },
  ];

  return (
    <nav className="px-4 py-2 fixed left-0 top-0 bg-white w-[300px] h-full md:bg-transparent md:w-auto md:h-auto md:relative overflow-auto md:overflow-visible">
      {/* Logo */}
      <div className="logo md:hidden py-2 flex items-center justify-between">
        <img alt="Logo" src={logo} />

          {/* Close button for mobile */}
      <Button className="md:hidden top-4 right-6" onClick={onClose}>
        <IoCloseSharp />
      </Button>
      </div>

    

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent className="flex gap-4 p-4 bg-white shadow-lg">
                {shopMenu.map((col) => (
                  <div>
                    <span className="font-medium">{col.title}</span>
                    <ul>
                      {col.items.map((item) => (
                        <NavigationMenuItem className="cursor-pointer w-[200px]">
                          {item}
                        </NavigationMenuItem>
                      ))}
                    </ul>
                  </div>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer">
              Our Story
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              Blog
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer">
              Contact Us
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex flex-col pt-5">
          <ul>
            <li className="flex items-center justify-between pb-3">Home</li>

            <li className="flex items-center justify-between pb-3" onClick={()=>setShopMenuOpen(!shopMenuOpen)}>Shop 

           {shopMenuOpen ? <FaChevronUp /> :<FaChevronDown /> }   
            </li>

            {shopMenuOpen &&
              shopMenu.map((menuItem) => (
                <div className="flex flex-col gap-1 pb-3">
                  <span className="font-medium">{menuItem.title}</span>

                  <ul>
                    {menuItem.items.map((item) => (
                      <li className="pb-2">
                        <Link to={"/"}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            <li className="flex items-center justify-between pb-3">our story</li>
            <li className="flex items-center justify-between pb-3">blog</li>
            <li className="flex items-center justify-between pb-3">contact us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
