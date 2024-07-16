import { RichTextType } from './richTextEditorTypes';
import { ImageInterface } from './imageTypes';

export interface SinglePageAttributes {
  descriptionParagraph: RichTextType[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headerText: string;
  image: ImageInterface;
}

export interface SinglePageData {
  id: number;
  attributes: SinglePageAttributes;
}

export interface SinglePageResponse {
  data: SinglePageData;
  meta: object;
}
