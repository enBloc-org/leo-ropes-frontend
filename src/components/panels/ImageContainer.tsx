'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ImageData } from '@/types/homePageTypes';
import Image from 'next/image';

interface ImageContainerProps {
  image: ImageData;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const largeScreenBreakpoint = useMediaQuery(1025);
  const xlScreenBreakpoint = useMediaQuery(1201);
  const getStyle = () => {
    if (largeScreenBreakpoint) {
      return {
        height: `${image.attributes.formats.small.height - 325}px`,
        width: `${image.attributes.formats.small.width - 325}px`,
      };
    } else if (xlScreenBreakpoint) {
      return {
        height: `${image.attributes.formats.medium.height - 550}px`,
        width: `${image.attributes.formats.medium.width - 550}px`,
      };
    } else {
      return {
        height: `${image.attributes.formats.medium.height - 550}px`,
        width: `${image.attributes.formats.medium.width - 550}px`,
      };
    }
  };
  return (
    <>
      <div
        className='relative rounded-lg 2xl:h-[200px] 2xl:w-[200px]'
        style={getStyle()}
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
