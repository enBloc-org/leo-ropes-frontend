import { ImageData } from '@/types/imageTypes';
import ImageContainer from './panels/ImageContainer';
import { v4 as uuidv4 } from 'uuid';
import { twMerge as tm } from 'tailwind-merge';

interface ImageGalleryProps {
  images: ImageData[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  return (
    <div className={tm('my-10 flex gap-4', className)}>
      {images.map((image: ImageData) => (
        <ImageContainer key={uuidv4()} image={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
