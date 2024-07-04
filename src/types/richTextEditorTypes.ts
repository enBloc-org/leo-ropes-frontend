export interface RichTextType {
  type: 'paragraph' | 'list';
  format?: 'unordered';
  children: TextChildType[] | ListItemType[];
}

export interface TextChildType {
  type: 'text' | 'link';
  text: string;
  bold?: boolean;
  italic?: boolean;
  url?: string;
  children?: TextChildType[];
}

export interface ListItemType {
  type: 'list-item';
  children: TextChildType[];
}

export interface ListType {
  type: 'list';
  format: 'unordered';
  children: ListItemType[];
}
