import {
  ListItemType,
  RichTextType,
  TextChildType,
} from '@/types/richTextEditorTypes';
import { v4 as uuidv4 } from 'uuid';
import ParagraphsList from './panels/ParagraphsList';
import UnorderedList from './panels/UnorderedList';

interface RichTextEditorProps {
  editorContent: RichTextType[];
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ editorContent }) => {
  return (
    <>
      {editorContent.map((content: RichTextType) => {
        switch (content.type) {
          case 'list':
            return (
              <UnorderedList
                key={uuidv4()}
                listContent={content.children as ListItemType[]}
              />
            );
          case 'paragraph':
            return (
              <ParagraphsList
                key={uuidv4()}
                paragraphContent={content.children as TextChildType[]}
              />
            );
        }
      })}
    </>
  );
};

export default RichTextEditor;
