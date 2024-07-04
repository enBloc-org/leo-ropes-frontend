type HamburgerButtonProps = {
  isOpen: boolean;
  clickHandler: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  clickHandler,
}) => {
  return (
    <button
      onClick={clickHandler}
      className='flex h-12 w-12 flex-col 
      items-center justify-center rounded-full lg:h-24 lg:w-24'
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      aria-expanded={isOpen}
    >
      <span
        className={`large-screen-btn z-50 mt-[.35rem] block h-1 w-7 rounded-full transition-all
                      duration-300 ease-out lg:mt-2 ${
                        isOpen
                          ? ' bg-black translate-y-3 rotate-45 lg:translate-y-4'
                          : ' -translate-y-0.0 bg-primary-gray-400'
                      }`}
      ></span>
      <span
        className={`large-screen-btn mt-[.35rem] block h-1 w-7 rounded-full bg-primary-gray-400 transition-all
                      duration-300 ease-out lg:mt-2 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
      ></span>
      <span
        className={`large-screen-btn z-50 mb-1 mt-[.35rem] block h-1 w-7 rounded-full transition-all 
                      duration-300 ease-out lg:mt-2 ${
                        isOpen
                          ? 'bg-black -translate-y-2 -rotate-45 lg:-translate-y-4'
                          : 'translate-y-0 bg-primary-gray-400'
                      }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
