import React from "react";
import TaskCard from "./TaskCard";
import { Badge } from "@/components/ui/badge";

const ProjectsListSection = () => {
  return (
    <div className="md:pl-12 mt-10">
      <div className="flex items-center font-medium text-sm">
        <span className="text-orange-500">On Going Tasks</span>
        <Badge className="ml-1 bg-orange-500">9</Badge>
        <span className="ml-3">Completed Tasks</span>
        <Badge className="ml-1">9</Badge>
      </div>
      <ul className="flex gap-5 md:gap-8 flex-wrap mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ul>
    </div>
  );
};

export default ProjectsListSection;
