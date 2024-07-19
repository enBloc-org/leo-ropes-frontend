'use client';

import { CSSProperties, ReactNode, useEffect, useState } from 'react';

const FullHeightContainer = ({ children }: { children: ReactNode }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    // Set initial height
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: height + 'px',
    overflow: 'auto',
  };

  return <div style={style}>{children}</div>;
};

export default FullHeightContainer;