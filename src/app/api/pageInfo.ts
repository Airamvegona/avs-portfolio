// app/api/pageInfo/route.ts
import { NextResponse } from 'next/server';
import { fetchPageInfo } from '../../../utils/fetchPageInfo';
import { fetchExperiences } from '../../../utils/fetchExperiences';
import { fetchSkills } from '../../../utils/fetchSkills';
import { fetchProjects } from '../../../utils/fetchProjects';
import { fetchSocials } from '../../../utils/fetchSocials';

export async function GET() {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return NextResponse.json({
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  });
}
