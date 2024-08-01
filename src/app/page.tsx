import { fetchStrapiContent } from '@/utils/fetchStrapiContent';
import { HomePageAttributes, HomePageResponse } from '@/types/homePageTypes';
import { type BlocksContent } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

//Components
import ImageContainer from '@/components/panels/ImageContainer';
import MainGrid from '@/components/layout/MainGrid';
import BlocksRendererClient from '@/components/layout/BlocksRendererClient';

export default async function Home() {
  const response: HomePageResponse = await fetchStrapiContent(
    'api/home-page?api/populate[heroText]&populate=images'
  );
  const data: HomePageAttributes = response.data.attributes;

  const breakPoints = {
    sm: { offSet: 300 },
    lg: { breakPoint: 1025, offSet: 50 },
    xl: { breakPoint: 1440, offSet: 600 },
  };

  return (
    <MainGrid className='relative top-20 pb-10 lg:top-[117px]'>
      <h1
        className='col-span-full mb-5 mt-10 px-6 text-center text-3xl leading-9 lg:mb-0
       lg:text-6xl'
      >
        {data.headerText}...
      </h1>
      <div
        className='col-span-full m-auto grid grid-cols-2 items-center justify-center gap-2
        md:grid-cols-3 lg:col-start-2 lg:col-end-7 lg:mt-8'
      >
        {data.images.data.map((image) => {
          return (
            <ImageContainer
              key={image.id}
              image={image}
              breakPoints={breakPoints}
            />
          );
        })}
      </div>
      <div
        className='col-span-full mt-10 flex flex-col items-center justify-around px-6
        sm:px-12 md:col-start-3 md:col-end-11 lg:col-start-7 lg:col-end-12 lg:mt-8 lg:pb-20 lg:text-lg '
      >
        <BlocksRendererClient
          content={response.data.attributes.heroText as BlocksContent}
        />{' '}
        <p className='mt-6 text-center font-semibold'>{data.tagLine}</p>
        <div className='my-10 flex items-center justify-center gap-4'>
          <Link
            href='/information'
            className='min-w-[100px] rounded-full bg-rainbow-700 px-4 py-3 font-semibold italic shadow-sm
            lg:p-4 lg:text-xl'
          >
            {data.CTAButtonText}
          </Link>
        </div>
      </div>
    </MainGrid>
  );
}
