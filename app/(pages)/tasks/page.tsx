import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TasksListSection from "./components/TaskListSection";
import { SidebarProvider } from "@/components/ui/sidebar";

const AllProjects = () => {
  return (
    <div className="w-full px-4 bg-gray-50">
      <Header />
      <SubHeader />
      <TasksListSection />
    </div>
  );
};

export default AllProjects;
