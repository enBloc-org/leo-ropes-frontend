'use client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import PanelContent from './panels/PanelContent';
import { ButtonListType, DisplayType } from '@/types/componentTypes';
import PanelContainer from './panels/PanelContainer';

interface MobileAccordionProps {
  buttonList: ButtonListType[];
  descriptionPanel: DescriptionPanelType[];
}

const MobileAccordion: React.FC<MobileAccordionProps> = ({
  buttonList,
  descriptionPanel,
}) => {
  const [activePanel, setActivePanel] = useState<DisplayType>('buttons');

  return (
    <main className='relative top-20 flex-grow pb-10'>
      {activePanel === 'buttons' && (
        <div className='m-auto grid max-w-[70%] gap-8 pt-14'>
          {buttonList.map((button) => {
            return (
              <button
                key={uuidv4()}
                className={`panel-button bg-rainbow-300 shadow-sm`}
                onClick={() => {
                  setActivePanel(button.display);
                }}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      )}
      <PanelContainer className='mt-20 gap-5 px-6'>
        {activePanel === 'types' && (
          <PanelContent
            panelInfo={descriptionPanel[0]}
            setActivePanel={setActivePanel}
          />
        )}
        {activePanel === 'covers' && (
          <PanelContent
            panelInfo={descriptionPanel[1]}
            setActivePanel={setActivePanel}
          />
        )}
        {activePanel === 'colours' && (
          <PanelContent
            panelInfo={descriptionPanel[2]}
            setActivePanel={setActivePanel}
          />
        )}
        {activePanel === 'core' && (
          <PanelContent
            panelInfo={descriptionPanel[3]}
            setActivePanel={setActivePanel}
          />
        )}
        {activePanel === 'lead' && (
          <PanelContent
            panelInfo={descriptionPanel[4]}
            setActivePanel={setActivePanel}
          />
        )}
        {activePanel === 'safety' && (
          <PanelContent
            panelInfo={descriptionPanel[5]}
            setActivePanel={setActivePanel}
          />
        )}
      </PanelContainer>
    </main>
  );
};

export default MobileAccordion;
