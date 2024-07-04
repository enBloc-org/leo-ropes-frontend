import { RichTextType } from "./richTextEditorTypes";

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageInterface {
  data: ImageData;
}

export interface ImageArrayInterface {
  data: ImageData[];
}

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
  images: ImageArrayInterface
}

export interface HomePageData {
  id: number;
  attributes: HomePageAttributes;
}

export interface HomePageResponse {
  data: HomePageData;
  meta: object;
}
