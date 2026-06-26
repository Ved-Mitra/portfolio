import React from "react";
import { ProjectData } from "@/helpers/projects";
import ProjectTile from "@/components/ProjectTile";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-8 max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold text-foreground tracking-tight">
          My Projects
        </h1>
        <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
          A collection of my work spanning Systems, Data Science, Mobile, and Full-Stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectData.map((project, idx) => (
          <ProjectTile key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}