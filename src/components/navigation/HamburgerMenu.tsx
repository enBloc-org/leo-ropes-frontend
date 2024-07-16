'use client';

import InstagramIcon from '@/components/icons/InstagramIcon';
import { useState, RefObject } from 'react';
import HamburgerButton from './HamburgerButton';
import ContactLink from './ContactLink';
import Link from 'next/link';
import FacebookIcon from '../icons/FacebookIcon';

const links = [
  { title: 'Home', href: '/' },
  { title: 'Info', href: '/information' },
  { title: 'Prices', href: '/prices' },
  { title: 'About', href: '/about' },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const scrollToTarget = (targetRef: RefObject<HTMLDivElement>) => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className='absolute right-5 lg:right-10'>
      <HamburgerButton isOpen={isOpen} clickHandler={clickHandler} />
      <div
        className={`nav-menu ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-5 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-8'>
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.title}
                className='link font-sans text-4xl'
                onClick={clickHandler}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className='flex flex-col gap-10 lg:mt-10'>
          <p>infoleoropes@gmail.com</p>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <ContactLink>send us a message</ContactLink>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <div className='flex items-center justify-around pb-8'>
            <InstagramIcon
              height={50}
              width={50}
              href='https://www.instagram.com/leo.ropes/?hl=en'
              currentColor={''}
            />
            <FacebookIcon
              width={40}
              height={40}
              href={
                'https://www.facebook.com/groups/coveredropes/?locale=en_GB'
              }
              currentColor={''}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
