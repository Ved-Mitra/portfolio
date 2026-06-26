import { ProjectData, Project } from "./projects";

export function getFeaturedProjects(): Project[] {
  return ProjectData.filter((project) => project.featured === true);
}
