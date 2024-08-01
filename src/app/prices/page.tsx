import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { fetchStrapiContent } from '@/utils/fetchStrapiContent';
import {
  SinglePageResponse,
  SinglePageAttributes,
} from '@/types/singlePageTypes';

// Components
import BlocksRendererClient  from '@/components/layout/BlocksRendererClient';
import MainGrid from '@/components/layout/MainGrid';

const AboutPage = async () => {
  const response: SinglePageResponse = await fetchStrapiContent(
    'api/prices-page?api/populate[headerText]&populate=image'
  );

  const data: SinglePageAttributes = response.data.attributes;

  return (
    <MainGrid className='relative top-20 pb-10 lg:top-[117px]'>
      <h1
        className='col-span-full mb-5 mt-10 px-6 text-3xl leading-9
        md:col-start-3 lg:mb-0 lg:text-left lg:text-4xl'
      >
        {data.headerText}
      </h1>
      <div
        className='col-span-full flex flex-col px-6
        sm:px-12 md:col-start-4 md:col-end-10 md:px-0 lg:mt-8 lg:pb-20 lg:text-lg'
      >
        <BlocksRendererClient
          content={data.descriptionParagraph as BlocksContent}
        />
      </div>
    </MainGrid>
  );
};

export default AboutPage;
