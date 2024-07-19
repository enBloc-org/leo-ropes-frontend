import { ReactNode } from 'react';
import { twMerge as tm } from 'tailwind-merge';

interface PanelContainerType {
  children: ReactNode;
  className?: string;
  panelRef?: React.Ref<HTMLDivElement>;
}

const PanelContainer: React.FC<PanelContainerType> = ({
  children,
  className,
  panelRef,
}) => {
  return (
    <section
      ref={panelRef}
      className={tm('flex scroll-mt-36 flex-col', className)}
    >
      {children}
    </section>
  );
};

export default PanelContainer;
