import React, { ReactNode } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { useConstructorsBlocks } from 'src/hooks';
import { ArrowIcon, CopyIcon, TrashIcon } from 'src/icons';
import { BlockSliceType, MoveBlockDirectionType } from 'src/types';

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
  bgColor?: 'string';
  isDisabled?: boolean;
}
interface Props {
  id: BlockSliceType['id'];
}

const ICON_BUTTON_SIZE = '25px';

const IconButton: React.FC<IconButtonProps> = ({
  bgColor = 'blue.medium',
  onClick,
  isDisabled,
  children,
}) => {
  return (
    <Button
      p={0}
      bg={bgColor}
      variant="solid"
      w={ICON_BUTTON_SIZE}
      h={ICON_BUTTON_SIZE}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};

export const ConstructorsBlockControlPanel: React.FC<Props> = ({ id }) => {
  const { moveBlock, copyBlock, deleteBlock, checkCanMoveBlock } =
    useConstructorsBlocks();

  function handleMoveBlock(direction: MoveBlockDirectionType) {
    return () => moveBlock(id, direction);
  }
  function handleCopyBlock() {
    copyBlock(id);
  }
  function handleDeleteBlock() {
    deleteBlock(id);
  }

  return (
    <HStack
      gap="5px"
      height={ICON_BUTTON_SIZE}
      position="absolute"
      right="0"
      top={ICON_BUTTON_SIZE}
    >
      <HStack gap={0}>
        <IconButton
          onClick={handleMoveBlock('down')}
          isDisabled={!checkCanMoveBlock(id, 'down')}
        >
          <ArrowIcon direction="down" />
        </IconButton>
        <IconButton
          onClick={handleMoveBlock('up')}
          isDisabled={!checkCanMoveBlock(id, 'up')}
        >
          <ArrowIcon direction="up" />
        </IconButton>
      </HStack>

      <HStack gap={0}>
        {/* @ts-ignore */}
        <IconButton onClick={handleCopyBlock} bgColor="cyan.medium">
          <CopyIcon />
        </IconButton>
        {/* @ts-ignore */}
        <IconButton onClick={handleDeleteBlock} bgColor="cyan.medium">
          <TrashIcon />
        </IconButton>
      </HStack>
    </HStack>
  );
};
