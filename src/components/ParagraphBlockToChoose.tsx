import React from 'react';

import { BlockToChoose } from 'src/components';
import { ParagraphIcon } from 'src/icons';

export function ParagraphBlockToChoose() {
  return (
    <BlockToChoose type="paragraph">
      <ParagraphIcon />
    </BlockToChoose>
  );
}
