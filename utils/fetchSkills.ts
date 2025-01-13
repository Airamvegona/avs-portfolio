import { Skill } from '../typings'

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSkills`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch skills');
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
