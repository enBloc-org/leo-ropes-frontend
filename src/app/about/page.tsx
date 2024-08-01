import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { fetchStrapiContent } from '@/utils/fetchStrapiContent';
import {
  SinglePageAttributes,
  SinglePageResponse,
} from '@/types/singlePageTypes';
// Components
import ImageContainer from '@/components/panels/ImageContainer';
import BlocksRendererClient from '@/components/layout/BlocksRendererClient';
import MainGrid from '@/components/layout/MainGrid';

const AboutPage = async () => {
  const response: SinglePageResponse = await fetchStrapiContent(
    'api/about-page?api/populate[headerText]&populate=image'
  );

  const breakPoints = {
    sm: { offSet: 0 },
    lg: { breakPoint: 1025, offSet: 0 },
    xl: { breakPoint: 1440, offSet: 400 },
  };

  const data: SinglePageAttributes = response.data.attributes;

  return (
    <MainGrid className='relative top-20 pb-10 lg:top-[117px]'>
      <h1
        className='col-span-full mb-5 mt-10 px-6 text-center text-3xl leading-9
        md:col-start-2 lg:mb-0 lg:text-left lg:text-4xl'
      >
        {data.headerText}...
      </h1>
      <div
        className='col-span-full m-auto items-center justify-center
        lg:col-start-2 lg:col-end-6'
      >
        <ImageContainer image={data.image.data} breakPoints={breakPoints} />
      </div>
      <div
        className='col-span-full mt-10 flex flex-col items-center justify-around px-6
        sm:px-12 md:col-start-2 md:col-end-12 lg:col-start-7 lg:col-end-12 lg:mt-8 lg:pb-20 lg:text-lg '
      >
        <BlocksRendererClient
          content={data.descriptionParagraph as BlocksContent}
        />
      </div>
    </MainGrid>
  );
};

export default AboutPage;
