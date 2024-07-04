'use client';
import { v4 as uuidv4 } from 'uuid';

//Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import { useState } from 'react';
import PanelContent from './panels/PanelContent';
import { ButtonListType, DisplayType } from '@/types/componentTypes';
import ImageContainer from './panels/ImageContainer';
import { ImageArrayInterface, ImageInterface } from '@/types/homePageTypes';

interface DesktopAccordionProps {
  buttonList: ButtonListType[];
  descriptionPanel: DescriptionPanelType[];
}

const DesktopAccordion: React.FC<DesktopAccordionProps> = ({
  buttonList,
  descriptionPanel,
}) => {
  const [activePanel, setActivePanel] = useState<DisplayType>('types');

  return (
    <div className='grid-template mt-24'>
      <div className='flex flex-col items-center gap-4'>
        {buttonList.map((button) => {
          return (
            <button
              key={uuidv4()}
              className={`panel-button w-32 ${activePanel === button.display ? 'bg-rainbow-300' : 'bg-gray-300'} lg:w-48 lg:text-lg`}
              onClick={() => {
                setActivePanel(button.display);
              }}
            >
              {button.text}
            </button>
          );
        })}
      </div>

      {activePanel === 'types' && (
        <>
          <PanelContent panelInfo={descriptionPanel[0]} />
          <ImageContainer
            panelImages={descriptionPanel[0].images as ImageArrayInterface}
            widthOffset={300}
            heightOffset={300}
          />
        </>
      )}
      {activePanel === 'covers' && (
        <>
          <PanelContent panelInfo={descriptionPanel[1]} />
          <ImageContainer
            panelImages={descriptionPanel[1].images as ImageArrayInterface}
            widthOffset={300}
            heightOffset={300}
          />
        </>
      )}
      {activePanel === 'colours' && (
        <>
          <PanelContent panelInfo={descriptionPanel[2]} />
          <ImageContainer
            panelImages={descriptionPanel[2].images as ImageArrayInterface}
            widthOffset={0}
            heightOffset={0}
          />
        </>
      )}
      {activePanel === 'core' && (
        <>
          <PanelContent panelInfo={descriptionPanel[3]} />
          <ImageContainer
            panelImages={descriptionPanel[3].images as ImageArrayInterface}
            widthOffset={300}
            heightOffset={300}
          />
        </>
      )}
      {activePanel === 'lead' && (
        <>
          <PanelContent panelInfo={descriptionPanel[4]} />
          <ImageContainer
            panelImages={descriptionPanel[4].images as ImageArrayInterface}
            widthOffset={300}
            heightOffset={300}
          />
        </>
      )}
      {activePanel === 'safety' && (
        <>
          <PanelContent panelInfo={descriptionPanel[5]} />
          <ImageContainer
            panelImages={descriptionPanel[5].images as ImageArrayInterface}
            widthOffset={300}
            heightOffset={300}
          />
        </>
      )}
    </div>
  );
};

export default DesktopAccordion;
