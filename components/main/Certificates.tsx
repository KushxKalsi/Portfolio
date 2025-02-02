import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certificates
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/courcera.png"
          title="Courcera Python3 Programming"
          description=""
        />
        <ProjectCard
          src="/certificatereact.png"
          title="Infosys ReactJS"
          description=""
        />
        <ProjectCard
          src="/Advanced CSharp.png"
          title="Advanced CSharp Programming"
          description=""
        />
      </div>
    </div>
  );
};

export default Projects;
