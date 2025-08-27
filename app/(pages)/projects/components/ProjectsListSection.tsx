import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsListSection = () => {
  return (
    <ul className="flex gap-5 md:gap-8 flex-wrap mt-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ul>
  );
};

export default ProjectsListSection;
