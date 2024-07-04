'use client';
import { ImageData } from '@/types/homePageTypes';
import Image from 'next/image';

interface ImageContainerProps {
  image: ImageData;
  widthOffset: number;
  heightOffset: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  image,
  widthOffset,
  heightOffset,
}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <div
        className='relative rounded-lg 2xl:h-[200px] 2xl:w-[200px]'
        style={{
          height: `${image.attributes.formats.small.height - heightOffset}px`,
          width: `${image.attributes.formats.small.width - widthOffset}px`,
        }}
      >
        <Image
          src={apiUrl + image.attributes.formats.small.url}
          fill={true}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw'
          alt={image.attributes.alternativeText}
          className='rounded-lg'
        />
      </div>
    </>
  );
};

export default ImageContainer;
