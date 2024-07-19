// Components
import { fetchStrapiContent } from '@/utils/fetchStrapiContent';
import ImageContainer from '@/components/panels/ImageContainer';
import RichTextEditor from '@/components/RichTextEditor';
import MainGrid from '@/components/layout/MainGrid';
import {
  SinglePageResponse,
  SinglePageAttributes,
} from '@/types/singlePageTypes';

const AboutPage = async () => {
  const response: SinglePageResponse = await fetchStrapiContent(
    'api/prices-page?api/populate[headerText]&populate=image'
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
        className='col-span-full mb-5 mt-10 px-6 text-3xl leading-9
        md:col-start-3 lg:mb-0 lg:text-left lg:text-4xl'
      >
        {data.headerText}
      </h1>
      <div
        className='col-span-full flex flex-col px-6
        sm:px-12 md:col-start-4 md:col-end-10 md:px-0 lg:mt-8 lg:pb-20 lg:text-lg'
      >
        <RichTextEditor editorContent={data.descriptionParagraph} />
      </div>
    </MainGrid>
  );
};

export default AboutPage;
