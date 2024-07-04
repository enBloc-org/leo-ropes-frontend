export type IconProps = {
  width: number;
  height: number;
  href: string;
  currentColor: string;
};

export type ButtonListType = {
  text: string;
  display: DisplayType;
};

export type DisplayType =
  | 'buttons'
  | 'types'
  | 'covers'
  | 'core'
  | 'colours'
  | 'lead'
  | 'safety';
