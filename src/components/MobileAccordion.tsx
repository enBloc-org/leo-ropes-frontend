'use client';
import { v4 as uuidv4 } from 'uuid';

//Components
import { DescriptionPanelType } from '@/types/infoPageTypes';
import { useState } from 'react';
import PanelContent from './panels/PanelContent';
import { ButtonListType, DisplayType } from '@/types/componentTypes';

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
    <>
      {activePanel === 'buttons' && (
        <div className='grid max-w-[70%] m-auto mt-14 gap-8'>
          {buttonList.map((button) => {
            return (
              <button
                key={uuidv4()}
                className={`panel-button bg-rainbow-300`}
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
    </>
  );
};

export default MobileAccordion;
