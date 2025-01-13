import { pageInfo } from '../studio-avs-portfolio/schemaTypes/pageInfo';
import { PageInfo } from '../typings';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPageInfo`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch page info');
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
