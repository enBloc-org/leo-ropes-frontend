import { ReactNode } from 'react';
import './MainGrid.css';
import { twMerge as tw } from 'tailwind-merge';

interface MainGridProps {
  children: ReactNode;
  className?: string;
}

const MainGrid: React.FC<MainGridProps> = ({ children, className }) => {
  return <main className={tw('grid-container', className)}> {children}</main>;
};

export default MainGrid;
