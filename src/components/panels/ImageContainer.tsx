'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { ImageData } from '@/types/imageTypes';

interface ImageContainerProps {
  image: ImageData;
  breakPoints: {
    sm: { offSet: number };
    lg: { breakPoint: number; offSet: number };
    xl: { breakPoint: number; offSet: number };
  };
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  image,
  breakPoints: { xl, lg, sm },
}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const largeScreenBreakpoint = useMediaQuery(lg.breakPoint);
  const xlScreenBreakpoint = useMediaQuery(xl.breakPoint);
  const getStyle = () => {
    if (xlScreenBreakpoint) {
      return {
        height: `${image.attributes.formats.medium.height - xl.offSet}px`,
        width: `${image.attributes.formats.medium.width - xl.offSet}px`,
      };
    } else if (largeScreenBreakpoint) {
      return {
        height: `${image.attributes.formats.medium.height - lg.offSet}px`,
        width: `${image.attributes.formats.medium.width - lg.offSet}px`,
      };
    } else {
      return {
        height: `${image.attributes.formats.small.height - sm.offSet}px`,
        width: `${image.attributes.formats.small.width - sm.offSet}px`,
      };
    }
  };

  const getImageUrl = (format: 'medium' | 'small') => {
    const imageUrl = image.attributes.formats[format].url;
    if (process.env.NODE_ENV === 'development') {
      return `${apiUrl}${imageUrl}`;
    }
    return imageUrl;
  };

  return (
    <>
      <div className='relative rounded-lg' style={getStyle()}>
        <Image
          src={
            largeScreenBreakpoint ? getImageUrl('medium') : getImageUrl('small')
          }
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
