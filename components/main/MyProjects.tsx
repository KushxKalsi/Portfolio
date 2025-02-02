import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/BirdsClassification.png"
          title="Birds Image Classification"
          description="Image Classification Model using CNN to classify different birds species."
        />
        <ProjectCard
          src="/stockprediction.png"
          title="Stock Price Prediction"
          description="Stock Price Prediction Model to predict stock prices using historical data and machine learning techniques."
        />
        <ProjectCard
          src="/Ifit.jpg"
          title="Ftiness Application"
          description="A step counter app, which helps its users stay healthy and fight the climate change."
        />
      </div>
    </div>
  );
};

export default Projects;
