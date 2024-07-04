import { fetchStrapiContent } from '@/utils/fetchStrapiContent';

// Components
import { InfoPageAPIResponse } from '@/types/infoPageTypes';
import AccordionContainer from '@/components/AccordionContainer';

const InformationPage = async () => {
  const response: InfoPageAPIResponse = await fetchStrapiContent(
    'api/info-page?populate[descriptionPanel][populate]=images'
  );

  const { descriptionPanel } = response.data.attributes;

  return (
    <main className='flex-grow'>
      <AccordionContainer descriptionPanel={descriptionPanel} />
    </main>
  );
};

export default InformationPage;
