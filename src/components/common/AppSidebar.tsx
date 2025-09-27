import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../ui/sidebar";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

export const AppSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      isSubMenu: false,
    },
    {
      title: "Profile",
      url: "/dashboard/Profile",
      icon: Inbox,
      isSubMenu: false,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: Calendar,
      isSubMenu: true,
      subMenu: [
        { title: "Add User", url: "/dashboard/users/add", icon: Inbox },
        { title: "Edit User", url: "/dashboard/users/edit", icon: Inbox },
      ],
    },
    {
      title: "Search",
      url: "/dashboard/search",
      icon: Search,
      isSubMenu: false,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      isSubMenu: false,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (

                item.subMenu?
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton   className="flex items-center gap-2 rounded-md px-2 py-6 transition-colors hover:bg-gray-200">
                       <item.icon/><span> {item.title}</span>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subMenu.map((sub)=>(
                          <SidebarMenuSubItem key={sub.title}>
 <NavLink to={sub.url} end>
                            {({ isActive }) => (
                              <SidebarMenuButton
                                className={cn(
                                  "flex items-center gap-2 rounded-md px-2 py-4 transition-colors",
                                  isActive
                                    ? "bg-black text-white"
                                    : "hover:bg-gray-200"
                                )}
                              >
                                <sub.icon />
                                <span>{sub.title}</span>
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                            </SidebarMenuSubItem>

                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
           :
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url} end>
                    {({ isActive }) => (
                      <SidebarMenuButton
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-6 transition-colors",
                          isActive ? "bg-black text-white" : "hover:bg-gray-200"
                        )}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
