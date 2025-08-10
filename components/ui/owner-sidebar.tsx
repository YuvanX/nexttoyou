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
import { IconBuildings, IconCirclePlusFilled, IconDashboard, IconEdit, IconInnerShadowTop, IconLibraryPlusFilled } from "@tabler/icons-react";
import { SideBarOwnerUser } from "./sidebar-owneruser";


export const OwnerSideBar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const items = [
    {
      title: "Dashboard",
      icon: IconDashboard,
      url: "/dashboard",
    },
    {
      title: "My Listing",
      icon: IconBuildings,
      url: "/mylisting",
    },
    {
      title: "Add",
      icon: IconLibraryPlusFilled,
      url: "/addproperty",
    },
    {
      title: "Edit",
      icon: IconEdit,
      url: "/edit-listing",
    }
  ];
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
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
              <SidebarMenuItem className="flex items-center gap-2">
                <SidebarMenuButton className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                  <IconCirclePlusFilled />
                  <span>Quick Create</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
      <SidebarFooter>
              <SideBarOwnerUser />
      </SidebarFooter>
    </Sidebar>
  );
};
