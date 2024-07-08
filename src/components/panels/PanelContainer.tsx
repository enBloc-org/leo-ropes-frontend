import { ReactNode } from 'react';
import { twMerge as tm } from 'tailwind-merge';

interface PanelContainerType {
  children: ReactNode;
  className?: string;
}

const PanelContainer: React.FC<PanelContainerType> = ({
  children,
  className,
}) => {
  return (
    <section className={tm('flex flex-col', className)}>{children}</section>
  );
};

export default PanelContainer;
