'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Dispatch, SetStateAction } from 'react';
import { type BlocksContent } from '@strapi/blocks-react-renderer';

//Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import { DisplayType } from '@/types/componentTypes';
import { ImageData } from '@/types/imageTypes';
import ImageGallery from '../ImageGallery';
import BlocksRendererClient from '../layout/BlocksRendererClient';

interface RopeTypesPanelProps {
  panelInfo: DescriptionPanelType;
  setActivePanel?: Dispatch<SetStateAction<DisplayType>>;
  className?: string;
}

const PanelContent: React.FC<RopeTypesPanelProps> = ({
  panelInfo,
  setActivePanel,
  className,
}) => {
  const isBreakpoint = useMediaQuery(1000);

  const breakPoints = {
    sm: { offSet: 355 },
    lg: { breakPoint: 1025, offSet: 350 },
    xl: { breakPoint: 1440, offSet: 575 },
  };

  return (
    <>
      {isBreakpoint && (
        <button
          onClick={() => {
            if (setActivePanel) setActivePanel('buttons');
          }}
          className='absolute top-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='2em'
            height='2em'
            viewBox='0 0 512 512'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={48}
              d='M244 400L100 256l144-144M120 256h292'
            ></path>
          </svg>
        </button>
      )}
      <div className={className}>
        <h2 className='mb-4 text-xl'>{panelInfo.h2}</h2>
        <BlocksRendererClient
          content={panelInfo.descriptionParagraph as BlocksContent}
        />
      </div>
      <ImageGallery
        images={panelInfo.images?.data as ImageData[]}
        breakPoints={breakPoints}
      />
    </>
  );
};

export default PanelContent;
