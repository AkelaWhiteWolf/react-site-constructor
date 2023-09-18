import React from 'react';

import { ChooseBlock } from 'src/components';
import { ImageIcon } from 'src/icons';

export function ChooseBlockImage() {
  return (
    <ChooseBlock type="image">
      <ImageIcon />
    </ChooseBlock>
  );
}
