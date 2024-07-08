'use client';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

//Components
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

  return (
    <MainGrid>
      <div className='col-span-full flex min-h-28 items-center justify-center gap-4 bg-gray-200'>
        {buttonList.map((button) => {
          return (
            <button
              key={uuidv4()}
              className={`panel-button w-32 ${activePanel === button.display ? 'bg-rainbow-300' : ''} lg:w-48 lg:text-lg`}
              onClick={() => {
                setActivePanel(button.display);
              }}
            >
              {button.text}
            </button>
          );
        })}
      </div>
      <>
        {descriptionPanel.map((panel, index) => {
          return index % 2 === 0 ? (
            <PanelContainer
              key={uuidv4()}
              className='col-span-full flex-row items-center justify-center gap-12 p-20 lg:col-start-3 lg:col-end-11 lg:bg-[#F2D8F5]'
            >
              <div className='max-w-[650px]'>
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
          ) : (
            <PanelContainer
              key={uuidv4()}
              className='grid-container col-span-full bg-gray-200'
            >
              <div className='col-span-full gap-4 p-20 lg:col-start-3 lg:col-end-11'>
                <div className='flex items-center gap-12'>
                  <ImageGallery
                    images={panel.images?.data as ImageData[]}
                    breakPoints={breakPoints}
                    className='flex-col'
                  />
                  <div className='max-w-[650px]'>
                    <h2 className='py-5 text-xl '>{panel.h2}</h2>
                    <RichTextEditor
                      editorContent={
                        panel.descriptionParagraph as RichTextType[]
                      }
                    />
                  </div>
                </div>
              </div>
              ;
            </PanelContainer>
          );
        })}
      </>
    </MainGrid>
  );
};

export default DesktopAccordion;
