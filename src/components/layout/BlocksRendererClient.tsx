'use client';
import Image from 'next/image';

import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';

export default function BlocksRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => {
          return <p className='mt-[.25rem]'>{children}</p>;
        },
        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ''}
            />
          );
        },
      }}
    />
  );
}
