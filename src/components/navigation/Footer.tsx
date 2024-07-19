import React from 'react';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';

const Footer = () => {
  return (
    <footer className='relative mt-16 flex w-full flex-row-reverse bg-rainbow-200 py-4 pr-2 lg:p-2 lg:pr-10'>
      <div className='flex items-center gap-2'>
        <FacebookIcon
          width={40}
          height={40}
          currentColor='currentColor'
          href='https://www.facebook.com/groups/coveredropes/?locale=en_GB'
        />
        <InstagramIcon
          width={50}
          height={50}
          currentColor='currentColor'
          href='https://www.instagram.com/leo.ropes/?hl=en'
        />
      </div>
    </footer>
  );
};

export default Footer;
