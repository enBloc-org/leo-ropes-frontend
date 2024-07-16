import { RichTextType } from './richTextEditorTypes';
import { ImageInterface } from './imageTypes';

export interface AboutPageAttributes {
  descriptionParagraph: RichTextType[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headerText: string;
  image: ImageInterface;
}

export interface AboutPageData {
  id: number;
  attributes: AboutPageAttributes;
}

export interface AboutPageResponse {
  data: AboutPageData;
  meta: object;
}
