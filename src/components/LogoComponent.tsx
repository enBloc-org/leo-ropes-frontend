'use client';
import useMediaQuery from '../hooks/useMediaQuery';
import LogoSvg from './icons/LogoSvg';

import React from 'react';

const LogoComponent = () => {
  const breakPoint = useMediaQuery(1095);

  return (
    <div className='flex items-center gap-2 text-2xl lg:text-6xl lg:tracking-wide'>
      <span className='text-rainbow-100'>L</span>
      <span className='text-rainbow-200'>E</span>
      <span className='text-rainbow-300'>O</span>
      <LogoSvg width={breakPoint ? 50 : 100} currentColor='#D1D1D1' />
      <span className='text-rainbow-400'>R</span>
      <span className='text-rainbow-500'>O</span>
      <span className='text-rainbow-600'>P</span>
      <span className='text-rainbow-700'>E</span>
      <span className='text-rainbow-100'>S</span>
    </div>
  );
};

export default LogoComponent;
