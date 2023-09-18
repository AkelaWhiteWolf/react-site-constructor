import React, { ChangeEvent, useMemo } from 'react';
import { Input, Textarea } from '@chakra-ui/react';
import { ConstructorsBlockImageUploader } from 'src/components';
import { useConstructorsBlocks } from 'src/hooks';
import { BlockSliceType, PossibleBlockType } from 'src/types';

interface IProps {
  id: BlockSliceType['id'];
  type: PossibleBlockType;
}

export const ConstructorsBlockInput: React.FC<IProps> = ({ id, type }) => {
  const { updateBlockContent, blocksData } = useConstructorsBlocks();

  const currentBlockData = useMemo(
    () => blocksData.find(block => block.id === id),
    [],
  );

  const isBlockTypeParagraph = type === 'paragraph';
  const attributes = {
    defaultValue: currentBlockData?.content,
    onInput: handleUpdateBlock,
    size: isBlockTypeParagraph ? 'xs' : undefined,
  };

  function handleUpdateBlock(
    event: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>,
  ) {
    updateBlockContent({ id, content: event.target.value });
  }

  switch (type) {
    case 'paragraph':
      return <Textarea {...attributes} />;
    case 'image':
      return (
        <>
          <Input {...attributes} />
          <ConstructorsBlockImageUploader id={id} />
        </>
      );
  }

  return isBlockTypeParagraph ? (
    <Textarea {...attributes} />
  ) : (
    <Input {...attributes} />
  );
};
