import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type BlocksContent } from '@strapi/blocks-react-renderer';

// Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import { ButtonListType, DisplayType } from '@/types/componentTypes';
import { ImageData } from '@/types/imageTypes';
import PanelContainer from './panels/PanelContainer';
import MainGrid from './layout/MainGrid';
import ImageGallery from './ImageGallery';
import BlocksRendererClient from './layout/BlocksRendererClient';

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
    panelRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActivePanel(display);
  };

  return (
    <MainGrid>
      <div className='sticky top-[75px] z-20 col-span-full flex min-h-20 items-center justify-center gap-4 bg-gray-100 shadow-md lg:top-28'>
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
          className={`${index === 0 ? 'relative top-16 mb-12' : 'relative'}
            ${
              index % 2 === 0
                ? 'col-start-3 col-end-11 flex-row items-center justify-center gap-12 bg-[#F2D8F5] p-20'
                : 'grid-container col-span-full bg-gray-200 py-20 shadow-md'
            }`}
          panelRef={(el) => {
            panelRefs.current[index] = el;
          }}
        >
          <div
            className={`${index % 2 !== 0 ? 'col-start-3 col-end-9 gap-4 px-20' : ''}`}
          >
            <h2 className='py-5 text-xl'>{panel.h2}</h2>
            <BlocksRendererClient
              content={panel.descriptionParagraph as BlocksContent}
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
