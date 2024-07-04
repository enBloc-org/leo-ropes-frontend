import { TextChildType } from '@/types/richTextEditorTypes';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

interface ParagraphListProps {
  paragraphContent: TextChildType[];
}

const ParagraphsList: React.FC<ParagraphListProps> = ({ paragraphContent }) => {
  return (
    <>
      {paragraphContent.map((paragraph) => {
        switch (paragraph.type) {
          case 'link':
            return (
              <Link key={uuidv4()} href={paragraph.url || '#'}>
                {paragraph.children?.map((link) => (
                  <span
                    key={uuidv4()}
                    className={` text-rainbow-200  ${link.bold ? 'font-semibold' : ''} ${link.italic ? 'italic' : ''}`}
                  >
                    {link.text}
                  </span>
                ))}
              </Link>
            );
          case 'text':
            if (paragraph.text === '') return <br />;
            return (
              <p
                key={uuidv4()}
                className={`font-light ${paragraph.bold ? ' font-semibold' : ''}${paragraph.italic ? ' italic' : ''}`}
              >
                {paragraph.text}
              </p>
            );
        }
      })}
    </>
  );
};

export default ParagraphsList;
