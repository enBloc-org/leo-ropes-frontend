import { ImageArrayInterface } from './homePageTypes';
import { RichTextType } from './richTextEditorTypes';

export interface DescriptionPanelType {
  id: number;
  h2: string;
  descriptionParagraph?: RichTextType[];
  images?: ImageArrayInterface;
}

export interface InfoPageAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  descriptionPanel: DescriptionPanelType[];
}

export interface InfoPageData {
  id: number;
  attributes: InfoPageAttributes;
}

export interface InfoPageAPIResponse {
  data: InfoPageData;
  meta: object;
}

export interface PanelProps {
  panelInfo: DescriptionPanelType;
}
