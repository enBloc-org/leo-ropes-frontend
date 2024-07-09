import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import { ButtonListType, DisplayType } from '@/types/componentTypes';
import { ImageData } from '@/types/imageTypes';
import { RichTextType } from '@/types/richTextEditorTypes';
import PanelContainer from './panels/PanelContainer';
import MainGrid from './layout/MainGrid';
import RichTextEditor from './RichTextEditor';
import ImageGallery from './ImageGallery';

interface DesktopAccordionProps {
  buttonList: ButtonListType[];
  descriptionPanel: DescriptionPanelType[];
}

const breakPoints = {
  sm: { offSet: 255 },
  lg: { breakPoint: 1025, offSet: 350 },
  xl: { breakPoint: 1440, offSet: 550 },
};

const DesktopAccordion: React.FC<DesktopAccordionProps> = ({
  buttonList,
  descriptionPanel,
}) => {
  const [activePanel, setActivePanel] = useState<DisplayType>('types');
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    panelRefs.current = panelRefs.current.slice(0, buttonList.length);
  }, [buttonList.length]);

  const handleButtonClick = (index: number, display: DisplayType) => {
    console.log('Scrolling to panel:', index);
    console.log('Panel ref:', panelRefs.current[index]);
    panelRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActivePanel(display);
  };

  return (
    <MainGrid>
      <div className='sticky top-28 col-span-full flex min-h-20 items-center justify-center gap-4 bg-gray-200'>
        {buttonList.map((button, index) => (
          <button
            key={uuidv4()}
            className={`panel-button w-32 ${activePanel === button.display ? 'bg-rainbow-300' : ''} lg:w-48 lg:text-lg`}
            onClick={() => handleButtonClick(index, button.display)}
          >
            {button.text}
          </button>
        ))}
      </div>
      {descriptionPanel.map((panel, index) => (
        <PanelContainer
          key={uuidv4()}
          className={`col-span-full ${index % 2 === 0 ? 'flex-row items-center justify-center gap-12 p-20 lg:col-start-3 lg:col-end-11 lg:bg-[#F2D8F5]' : 'grid-container bg-gray-200'}`}
          panelRef={(el) => {
            panelRefs.current[index] = el;
          }}
        >
          <div
            className={`max-w-[650px] ${index % 2 !== 0 ? 'col-span-full gap-4 p-20 lg:col-start-3 lg:col-end-11' : ''}`}
          >
            <h2 className='py-5 text-xl'>{panel.h2}</h2>
            <RichTextEditor
              editorContent={panel.descriptionParagraph as RichTextType[]}
            />
          </div>
          <ImageGallery
            images={panel.images?.data as ImageData[]}
            breakPoints={breakPoints}
            className='flex-col'
          />
        </PanelContainer>
      ))}
    </MainGrid>
  );
};

export default DesktopAccordion;
