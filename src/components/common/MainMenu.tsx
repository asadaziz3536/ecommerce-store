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
import { Link, NavLink, useNavigate } from "react-router-dom";
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


  const handleNavClick=()=>{
   
  }

  return (
    <nav className="px-4 py-2 fixed left-0 top-0 bottom-0 bg-white w-[300px] h-full md:bg-transparent md:w-auto md:h-auto md:relative overflow-auto md:overflow-visible z-100 shadow-[4px_16px_32px_-20px_#000] md:shadow-none">
      {/* Logo */}
      <div className="logo md:hidden py-2 flex items-center justify-between">
        <img alt="Logo" src={logo} />

          {/* Close button for mobile */}
      <Button className="md:hidden top-4 right-6" onClick={onClose}>
        <IoCloseSharp className="z-[100]" />
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

              <NavLink to="/" className={({isActive})=>`after:content-[''] after:absolute after:bottom-[-10px] after:w-full after:h-1 after:bg-orange-400 after:left-0 after:transition-all duration-300 after:origin-center ${isActive ? 'after:scale-x-100 after:opacity-100': 'after:scale-x-0 after:opacity-0'}`}>

              Home

              </NavLink>
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

      
            <NavigationMenuItem className="cursor-pointer"  >

              <NavLink to="/products"  className={({isActive})=>`after:content-[''] after:absolute after:bottom-[-10px] after:w-full after:h-1 after:bg-orange-400 after:left-0 after:transition-all duration-300 after:origin-center ${isActive ? 'after:scale-x-100 after:opacity-100': 'after:scale-x-0 after:opacity-0'}`} >
              Products

              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer" onClick={()=>navigate('/categories')}>
              
              
              <NavLink to="/categories" className={({isActive})=>`after:content-[''] after:absolute after:bottom-[-10px] after:w-full after:h-1 after:bg-orange-400 after:left-0 after:transition-all duration-300 after:origin-center ${isActive ? 'after:scale-x-100 after:opacity-100': 'after:scale-x-0 after:opacity-0'}`} >
              Categories

              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem    >
         
              <NavLink to="/contact-us" className={({isActive})=>`after:content-[''] after:absolute after:bottom-[-10px] after:w-full after:h-1 after:bg-orange-400 after:left-0 after:transition-all duration-300 after:origin-center ${isActive ? 'after:scale-x-100 after:opacity-100': 'after:scale-x-0 after:opacity-0'}`} >
              Contact Us

              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex flex-col pt-5">
          <ul>
          <li className="flex items-center justify-between pb-3">
              <Link to="/" onClick={handleNavClick}>
              Home
              </Link></li>

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
            <li className="flex items-center justify-between pb-3">
              <Link to="/products">
              Products
              </Link></li>
            <li className="flex items-center justify-between pb-3">Categories</li>
            <li className="flex items-center justify-between pb-3">Contact us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
