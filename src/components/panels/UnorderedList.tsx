import { ListItemType } from '@/types/richTextEditorTypes';
import { v4 as uuidv4 } from 'uuid';

interface UnorderedListProps {
  listContent: ListItemType[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ listContent }) => {
  return (
    <ul className='list-inside list-disc'>
      {listContent.map((listItem) => {
        if (listItem.type === 'list-item') {
          return (
            <li
              className={`${listItem.children[0].bold ? ' font-semibold' : ''}${listItem.children[0].italic ? ' italic' : ''} 
              mb-5 text-lg font-light`}
              key={uuidv4()}
            >
              {listItem.children[0].text}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default UnorderedList;
