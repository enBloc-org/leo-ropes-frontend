// Components
import { InfoPageAPIResponse } from '@/types/infoPageTypes';
import AccordionContainer from '@/components/AccordionContainer';
import { fetchStrapiContent } from '@/utils/fetchStrapiContent';

const AboutPage = async () => {
  // const response: InfoPageAPIResponse = await fetchStrapiContent(
  //   'api/info-page?populate[descriptionPanel][populate]=images'
  // );


  return (
    <main className='flex-grow'>
      About
    </main>
  );
};

export default AboutPage;