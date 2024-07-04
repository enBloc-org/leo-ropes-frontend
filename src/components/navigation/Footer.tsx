import React from 'react';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';

const Footer = () => {
  return (
    <footer className='flex w-full flex-row-reverse bg-rainbow-200 mt-8 py-4 pr-2 lg:p-2 lg:pr-10'>
      <div className='flex items-center gap-2'>
        <FacebookIcon
          width={40}
          height={40}
          currentColor='currentColor'
          href='/'
        />
        <InstagramIcon
          width={50}
          height={50}
          currentColor='currentColor'
          href='/'
        />
      </div>
    </footer>
  );
};

export default Footer;
