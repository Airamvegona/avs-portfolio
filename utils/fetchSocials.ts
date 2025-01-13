import { social } from '../studio-avs-portfolio/schemaTypes/social';
import { Social } from '../typings'

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSocials`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch socials');
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
