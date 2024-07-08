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
  return (
    <>
      <div className={className}>
        <h2 className='text-xl '>{panelInfo.h2}</h2>
        <ImageGallery images={panelInfo.images?.data as ImageData[]} />
        <RichTextEditor
          editorContent={panelInfo.descriptionParagraph as RichTextType[]}
        />
      </div>
    </>
  );
};

export default PanelContent;
