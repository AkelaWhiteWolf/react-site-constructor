import React from 'react';
import { Button, HStack, Image, Text } from '@chakra-ui/react';
import { AlertIcon } from 'src/icons';
import { PossibleBlockType } from 'src/types';

interface Props {
  type: PossibleBlockType;
  content: string;
}

export const RenderBlock: React.FC<Props> = ({ type, content }) => {
  // FIXME: may be it's better to create personal components for every type for reusing it.

  const RenderBlockImage = () => {
    return content ? (
      <Image
        src={content}
        alt="image of rendered block"
        maxW="400px"
        maxH="400px"
      />
    ) : (
      <HStack gap="10px">
        <AlertIcon />
        <Text>Can't show Image...</Text>
      </HStack>
    );
  };

  switch (type) {
    case 'headline':
      return (
        <Text fontSize="22px" fontWeight={700}>
          {content}
        </Text>
      );
    case 'paragraph':
      return (
        <Text fontSize="14px" color="bluegrey">
          {content}
        </Text>
      );
    case 'image':
      return <RenderBlockImage />;
    case 'button':
      return (
        <Button bg="blue.medium" color="white" variant="solid">
          {content}
        </Button>
      );
    default:
      return (
        <Text fontSize="14px" color="bluegrey">
          {content}
        </Text>
      );
  }
};
