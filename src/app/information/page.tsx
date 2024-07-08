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
    <>
      <AccordionContainer descriptionPanel={descriptionPanel} />
    </>
  );
};

export default InformationPage;
