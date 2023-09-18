import React from 'react';

import { ChooseBlock } from 'src/components';
import { ImageIcon } from 'src/icons';

export function ChooseBlockButton() {
  return (
    <ChooseBlock type="button">
      <ImageIcon />
    </ChooseBlock>
  );
}
