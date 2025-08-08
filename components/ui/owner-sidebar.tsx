import { Home, List, PlusSquare, Settings, Edit } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import { IconInnerShadowTop } from "@tabler/icons-react";

export const OwnerSideBar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const items = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/dashboard",
    },
    {
      title: "My Listing",
      icon: List,
      url: "/mylisting",
    },
    {
      title: "Add Listing",
      icon: PlusSquare,
      url: "/add-listing",
    },
    {
      title: "Account Setting",
      icon: Settings,
      url: "/account-setting",
    },
    {
      title: "Edit Listing",
      icon: Edit,
      url: "/edit-listing",
    },
  ];
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
            <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">nexttoyou</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, idx) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
