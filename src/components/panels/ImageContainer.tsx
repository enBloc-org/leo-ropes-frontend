'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { ImageData } from '@/types/imageTypes';

interface ImageContainerProps {
  image: ImageData;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const largeScreenBreakpoint = useMediaQuery(1025);
  const xlScreenBreakpoint = useMediaQuery(1450);
  const getStyle = () => {
    if (largeScreenBreakpoint) {
      return {
        height: `${image.attributes.formats.small.height - 355}px`,
        width: `${image.attributes.formats.small.width - 355}px`,
      };
    } else if (xlScreenBreakpoint) {
      return {
        height: `${image.attributes.formats.medium.height - 600}px`,
        width: `${image.attributes.formats.medium.width - 600}px`,
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
        className='2xl:h-[200px] 2xl:w-[200px] relative rounded-lg'
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
