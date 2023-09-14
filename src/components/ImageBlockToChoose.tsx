import React from 'react';

import { BlockToChoose } from 'src/components';
import { ImageIcon } from 'src/icons';

export function ImageBlockToChoose() {
  return (
    <BlockToChoose type="image">
      <ImageIcon />
    </BlockToChoose>
  );
}
