'use client';
import { twMerge } from 'tailwind-merge';

type GenericButtonPropTypes = {
  children: string;
  className: string;
  isDisabled?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const GenericButton: React.FC<GenericButtonPropTypes> = ({
  children,
  className,
  clickHandler,
}) => {
  return (
    <button
      onClick={clickHandler}
      className={twMerge('rounded-xl px-4  py-3 shadow-sm', className)}
    >
      {children}
    </button>
  );
};

export default GenericButton;
