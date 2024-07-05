'use client';
import { DescriptionPanelType } from '@/types/infoPageTypes';
import PanelContainer from './PanelContainer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { DisplayType } from '@/types/componentTypes';
import { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RichTextType } from '@/types/richTextEditorTypes';
import RichTextEditor from '../RichTextEditor';
import ImageContainer from '@/components/panels/ImageContainer';
import { ImageData } from '@/types/imageTypes';
import ImageGallery from '../ImageGallery';

interface RopeTypesPanelProps {
  panelInfo: DescriptionPanelType;
  setActivePanel?: Dispatch<SetStateAction<DisplayType>>;
}

const PanelContent: React.FC<RopeTypesPanelProps> = ({
  panelInfo,
  setActivePanel,
}) => {
  const isBreakpoint = useMediaQuery(1000);

  return (
    <>
      <PanelContainer>
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
        <h2 className='text-xl '>{panelInfo.h2}</h2>
        <RichTextEditor
          editorContent={panelInfo.descriptionParagraph as RichTextType[]}
        />
        <ImageGallery images={panelInfo.images?.data as ImageData[]} />
      </PanelContainer>
    </>
  );
};

export default PanelContent;
