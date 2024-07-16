'use client';

import Link from 'next/link';
import LogoSvg from './icons/LogoSvg';
import useMediaQuery from '../hooks/useMediaQuery';


const LogoComponent = () => {
  const breakPoint = useMediaQuery(1095);

  return (
    <Link href='/'>
      <div className='flex items-center gap-2 text-2xl lg:text-6xl lg:tracking-wide'>
        <span className='text-rainbow-100'>L</span>
        <span className='text-rainbow-200'>E</span>
        <span className='text-rainbow-300'>O</span>
        <LogoSvg width={breakPoint ? 60 : 100} currentColor='#D1D1D1' />
        <span className='text-rainbow-400'>R</span>
        <span className='text-rainbow-500'>O</span>
        <span className='text-rainbow-600'>P</span>
        <span className='text-rainbow-700'>E</span>
        <span className='text-rainbow-100'>S</span>
      </div>
    </Link>
  );
};

export default LogoComponent;
