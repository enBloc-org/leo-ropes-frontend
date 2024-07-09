import LogoComponent from '../LogoComponent';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header
      className='sticky top-0 z-20 flex items-center bg-primary-green-400
     p-4 sm:pl-[10%] lg:justify-center lg:pl-0'
    >
      <LogoComponent />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
