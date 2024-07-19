import { RichTextType } from './richTextEditorTypes';
import { ImageArrayInterface, ImageInterface } from './imageTypes';

export interface RopeGalleryItem {
  id: number;
  href: string;
  image: ImageInterface;
}

export interface HomePageAttributes {
  headerText: string;
  heroText: RichTextType[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tagLine: string;
  CTAButtonText: string;
  images: ImageArrayInterface;
}

export interface HomePageData {
  id: number;
  attributes: HomePageAttributes;
}

export interface HomePageResponse {
  data: HomePageData;
  meta: object;
}
