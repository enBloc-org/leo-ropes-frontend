import { ReactNode } from 'react';

interface PanelContainerType {
  children: ReactNode;
}

const PanelContainer: React.FC<PanelContainerType> = ({ children }) => {
  return (
    <section className='m-auto mt-24 flex flex-col gap-5 px-6 lg:px-12 lg:max-w-[80%] lg:mt-0'>
      {children}
    </section>
  );
};

export default PanelContainer;
