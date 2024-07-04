import GenericButton from '@/components/GenericButton';
import { fetchStrapiContent } from '@/utils/fetchStrapiContent';
import Image from 'next/image';
import {
  HomePageAttributes,
  HomePageResponse,
  RopeGalleryItem,
} from '@/types/homePageTypes';
import ImageContainer from '@/components/panels/ImageContainer';
import ParagraphsList from '@/components/panels/ParagraphsList';
import RichTextEditor from '@/components/RichTextEditor';

export default async function Home() {
  const response: HomePageResponse = await fetchStrapiContent(
    'api/home-page?api/populate[heroText]&[populate]=images'
  );

  const data: HomePageAttributes = response.data.attributes;

  return (
    <main className='m-auto mt-8 w-[80%]'>
      <h1 className='text-center text-3xl leading-9 lg:py-8 lg:text-6xl'>
        {data.headerText}...
      </h1>
      <div
        className='m-auto mt-8 flex flex-col items-center justify-center gap-4 lg:mt-0 lg:max-w-[1100px] lg:flex-row-reverse 
        lg:justify-around lg:gap-10 xl:mt-12 xl:max-w-[1250px]'
      >
        {data.images.data.map((image) => {
          return (
            <ImageContainer 
            image={image}
            widthOffset={300}
            heightOffset={300}/>
          )
        })}
       
        <div className='flex flex-col items-center justify-around lg:mt-0 lg:text-lg xl:text-xl '>
          <RichTextEditor 
            editorContent={data.heroText}
          />
          <p className='text-center font-light italic'>{data.tagLine}</p>
          <div className='my-10 flex items-center justify-center gap-4'>
            <GenericButton className='bg-rainbow-700 min-w-[100px] rounded-full font-semibold italic'>
              {data.CTAButtonText}
            </GenericButton>
          </div>
        </div>
      </div>
    </main>
  );
}
