'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';

//Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import { DisplayType } from '@/types/componentTypes';
import { RichTextType } from '@/types/richTextEditorTypes';
import { ImageData } from '@/types/imageTypes';
import RichTextEditor from '../RichTextEditor';
import ImageGallery from '../ImageGallery';

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

  return (
    <>
      {isBreakpoint && (
        <button
          onClick={() => {
            if (setActivePanel) setActivePanel('buttons');
          }}
          className='absolute top-24'
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
        <h2 className='text-xl '>{panelInfo.h2}</h2>
        <RichTextEditor
          editorContent={panelInfo.descriptionParagraph as RichTextType[]}
        />
      </div>
      <ImageGallery images={panelInfo.images?.data as ImageData[]} />
    </>
  );
};

export default PanelContent;
