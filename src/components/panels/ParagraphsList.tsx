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
                {paragraph.children?.map((link, index) => (
                  <span
                    key={uuidv4()}
                    className={`text-rainbow-200 ${link.bold ? 'font-semibold' : ''} ${link.italic ? 'italic' : ''} ${index === 0 ? 'ml-4' : ''}`}
                  >
                    {link.text}
                  </span>
                ))}
              </Link>
            );
          case 'text':
            if (paragraph.text === '') return <br className='mt-4' />;
            const words = paragraph.text.split(' ');
            return (
              <p
                key={uuidv4()}
                className={`mt-2 font-light ${paragraph.bold ? 'font-semibold' : ''}${paragraph.italic ? 'italic' : ''}`}
              >
                <span className='ml-4'>{words.shift()}</span> {words.join(' ')}
              </p>
            );
        }
      })}
    </>
  );
};

export default ParagraphsList;
