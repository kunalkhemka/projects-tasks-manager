import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import ProjectsStatusChart from "./RadialChart";

const RightSidebar = () => {
  return (
    <Sidebar
      side="right"
      collapsible="none"
      className="hidden xl:block md:w-[32rem]"
    >
      <SidebarHeader className="flex-row">
        <SidebarMenu>
          <SidebarMenuItem>
            <ProjectsStatusChart />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu></SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default RightSidebar;
