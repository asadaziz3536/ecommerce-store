import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Header = () => {

const [token, setToken]=useState(localStorage.getItem("token"));


useNavigate()
    const handleClick=()=>{
        if(token){
          setToken(localStorage.removeItem("token"))
          
        }

    }
  return (
   <header className="flex justify-end w-full bg-white fixed top-0  py-3 px-4">
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
  )
}

export default Header