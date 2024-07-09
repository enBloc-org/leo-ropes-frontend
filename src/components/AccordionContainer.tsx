'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { DescriptionPanelType } from '@/types/infoPageTypes';
import DesktopAccordion from './DesktopAccordion';
import MobileAccordion from './MobileAccordion';
import { ButtonListType } from '@/types/componentTypes';

interface AccordionContainerProps {
  descriptionPanel: DescriptionPanelType[];
}

const AccordionContainer: React.FC<AccordionContainerProps> = ({
  descriptionPanel,
}) => {
  const isBreakpoint = useMediaQuery(1000);
  const buttonList: ButtonListType[] = [
    { text: 'Rope Types', display: 'types' },
    { text: 'Rope covers', display: 'covers' },
    { text: 'Colours', display: 'colours' },
    { text: 'Core Thickness', display: 'core' },
    { text: 'Lead Time', display: 'lead' },
    { text: 'Safety Info', display: 'safety' },
  ];
  return (
    <>
      {!isBreakpoint && (
        <DesktopAccordion
          buttonList={buttonList}
          descriptionPanel={descriptionPanel}
        />
      )}
      {isBreakpoint && (
        <MobileAccordion
          buttonList={buttonList}
          descriptionPanel={descriptionPanel}
        />
      )}
    </>
  );
};

export default AccordionContainer;
