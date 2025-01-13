import { experience } from '../studio-avs-portfolio/schemaTypes/experience';
import { Experience } from '../typings';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getExperiences`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
