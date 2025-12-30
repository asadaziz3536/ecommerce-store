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
} from "../../ui/sidebar";

import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import logo from "@/assets/images/site-logo.svg";
export const AppSidebar = () => {
  const location = useLocation();

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

  const isChildActive = items.some((item) =>
    item.subMenu?.some(
      (subItem) =>
        location.pathname === subItem.url ||
        location.pathname.startsWith(subItem.url + "/")
    )
  );

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <img src={logo} alt="" />
          </SidebarGroupLabel>

          <SidebarGroupContent className="pt-4">
            <SidebarMenu>
              {items.map((item) =>
                item.subMenu ? (
                  <Collapsible className="group/collapsible">
                    <SidebarGroup className="p-0">
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger
                          className={`rounded-md px-2 py-6 ${
                            isChildActive ? "bg-black text-white" : ""
                          }`}
                        >
                          Users
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent className="p-2">
                        {item.subMenu.map((Item) => (
                          <SidebarMenuItem key={Item.title}>
                            <NavLink to={Item.url} end>
                              {({ isActive }) => (
                                <SidebarMenuButton
                                  className={cn(
                                    "flex items-center gap-2 rounded-md px-2 py-3 transition-colors",
                                    isActive
                                      ? "bg-black text-white hover:bg-black-200 hover:text-white"
                                      : "hover:bg-gray-200"
                                  )}
                                >
                                  <item.icon />
                                  <span>{Item.title}</span>
                                </SidebarMenuButton>
                              )}
                            </NavLink>
                          </SidebarMenuItem>
                        ))}
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <NavLink to={item.url} end>
                      {({ isActive }) => (
                        <SidebarMenuButton
                          className={cn(
                            "flex items-center gap-2 rounded-md px-2 py-6 transition-colors",
                            isActive
                              ? "bg-black text-white"
                              : "hover:bg-gray-200"
                          )}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      )}
                    </NavLink>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
