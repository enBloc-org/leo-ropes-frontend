import GenericButton from '@/components/GenericButton';
import { HomePageAttributes, HomePageResponse } from '@/types/homePageTypes';
import ImageContainer from '@/components/panels/ImageContainer';
import RichTextEditor from '@/components/RichTextEditor';
import MainGrid from '@/components/layout/MainGrid';
import { fetchStrapiContent } from '@/utils/fetchStrapiContent';

export default async function Home() {
  const response: HomePageResponse = await fetchStrapiContent(
    'api/home-page?api/populate[heroText]&populate=images'
  );

  const data: HomePageAttributes = response.data.attributes;

  return (
    <MainGrid className=''>
      <h1
        className='col-span-full mt-10 px-6 text-center text-3xl leading-9
       lg:text-6xl'
      >
        {data.headerText}...
      </h1>
      <div
        className='col-span-full m-auto mt-2 grid grid-cols-2 items-center justify-center gap-2
        md:mt-8 md:grid-cols-3 lg:col-start-2 lg:col-end-7'
      >
        {data.images.data.map((image) => {
          return <ImageContainer key={image.id} image={image} />;
        })}
      </div>
      <div
        className='col-span-full mt-10 flex flex-col items-center justify-around px-6 sm:px-12
        md:col-start-2 md:col-end-6 lg:col-start-7 lg:col-end-12 lg:mt-8 lg:text-lg xl:text-xl '
      >
        <RichTextEditor editorContent={data.heroText} />
        <p className='mt-6 text-center font-semibold'>{data.tagLine}</p>
        <div className='my-10 flex items-center justify-center gap-4'>
          <GenericButton
            className='bg-rainbow-700 min-w-[100px] rounded-full font-semibold italic
            lg:p-4 lg:text-xl'
          >
            {data.CTAButtonText}
          </GenericButton>
        </div>
      </div>
    </MainGrid>
  );
}
