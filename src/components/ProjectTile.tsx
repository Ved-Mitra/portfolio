import React from "react";
import { Project } from "@/helpers/projects";

export default function ProjectTile({ project }: { project: Project }) {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "working":
        return { color: "text-yellow-400", label: "Working" };
      case "some version completed":
        return { color: "text-orange-400", label: "More Work Needed" };
      case "completed":
        return { color: "text-green-400", label: "Completed" };
      default:
        return { color: "text-primary", label: status };
    }
  };

  // const hoverStyles = getHoverStyles(project.status);
  const badge = getStatusBadge(project.status);
  
  const projectId = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div 
      id={projectId}
      className="group flex flex-col justify-between h-full bg-surface border border-accent p-8 rounded-3xl transition-all duration-500 overflow-hidden relative"
    >
      <div className="relative z-10 flex flex-col gap-6 flex-grow">
        
      
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-3xl font-extrabold text-foreground transition-colors duration-300">
            {project.title}
          </h3>
          <span className={`text-[10px] font-bold uppercase tracking-widest ${badge.color} whitespace-nowrap`}>
            {badge.label}
          </span>
        </div>

        <div className="text-foreground/80 text-sm leading-relaxed">
          {project.description}
        </div>

      
        {/* <div className="mt-2 flex-grow">
          <div className="text-sm">
            {project.features}
          </div>
        </div> */}

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {project.links.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-foreground bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-border transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 mt-8 pt-6 border-t border-border/50">
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-semibold text-foreground/80 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-border transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
