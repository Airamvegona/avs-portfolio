import { project } from '../studio-avs-portfolio/schemaTypes/project';
import { Project } from '../typings'

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getProjects`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
