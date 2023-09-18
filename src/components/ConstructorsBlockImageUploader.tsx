import React, { ChangeEvent } from 'react';
import { Input } from '@chakra-ui/react';
import { useConstructorsBlocks } from 'src/hooks';
import { BlockSliceType } from 'src/types';
import { asyncGetBase64 } from 'src/utils';

interface Props {
  id: BlockSliceType['id'];
}

export const ConstructorsBlockImageUploader: React.FC<Props> = ({ id }) => {
  const { updateBlockContent } = useConstructorsBlocks();

  function handleUpdateBlockImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      asyncGetBase64(file).then(fileString =>
        updateBlockContent({ id, content: fileString }),
      );
    } else {
      updateBlockContent({ id, content: '' });
    }
  }

  return (
    <Input
      type="file"
      p="0"
      m="0"
      border="none"
      onChange={handleUpdateBlockImage}
    />
  );
};
