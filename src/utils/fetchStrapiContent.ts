import { SinglePageResponse } from '@/types/singlePageTypes';

export async function fetchStrapiContent(endPoint: string) {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/${endPoint}`, {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data ? data : [];
  } catch (error) {
    console.error(error);
  }
}
