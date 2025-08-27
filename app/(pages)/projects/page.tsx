import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ProjectsListSection from "./components/ProjectsListSection";
import RightSidebar from "./components/RightSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

const AllProjects = () => {
  return (
    <div className="w-full px-4">
      <SidebarProvider open>
        <div>
          <Header />
          <SubHeader />
          <ProjectsListSection />
        </div>
        <RightSidebar />
      </SidebarProvider>
    </div>
  );
};

export default AllProjects;
