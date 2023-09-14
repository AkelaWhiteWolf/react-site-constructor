import React, { ChangeEvent, useMemo } from 'react';
import { Textarea } from '@chakra-ui/react';
import { useConstructorsBlocks } from 'src/hooks';

interface IProps {
  id: number;
}

export const ConstructorsBlockInput: React.FC<IProps> = ({ id }) => {
  const { updateBlockContent, blocksData } = useConstructorsBlocks();

  const currentBlockData = useMemo(
    () => blocksData.find(block => block.id === id),
    [],
  );

  function handleUpdateBlock(event: ChangeEvent<HTMLTextAreaElement>) {
    updateBlockContent({ id, content: event.target.value });
  }

  return (
    <Textarea
      defaultValue={currentBlockData?.content}
      onInput={handleUpdateBlock}
    />
  );
};
