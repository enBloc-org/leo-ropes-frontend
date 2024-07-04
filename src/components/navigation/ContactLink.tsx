import { ReactNode } from 'react';
import Link from 'next/link';
import { twMerge as tm } from 'tailwind-merge';

type ContactLinkProps = {
  className?: string;
  children: ReactNode;
};

const ContactLink: React.FC<ContactLinkProps> = ({ className, children }) => {
  return (
    <Link
      href={'mailto:leoropes@gmail.com'}
      className={tm('button bg-rainbow-600', className)}
    >
      {children}
    </Link>
  );
};

export default ContactLink;
