import LogoComponent from '../LogoComponent';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header
      className='bg-primary-green-400 flex items-center p-4
     sm:pl-[10%] lg:justify-center lg:pl-0'
    >
      <LogoComponent />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
