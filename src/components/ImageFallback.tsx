import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { AlertIcon } from 'src/icons';

export const ImageFallback = () => {
  return (
    <HStack gap="10px">
      <AlertIcon />
      <Text>Can't show Image...</Text>
    </HStack>
  );
};
