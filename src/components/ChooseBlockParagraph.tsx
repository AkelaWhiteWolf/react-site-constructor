import React from 'react';

import { ChooseBlock } from 'src/components';
import { ParagraphIcon } from 'src/icons';

export function ChooseBlockParagraph() {
  return (
    <ChooseBlock type="paragraph">
      <ParagraphIcon />
    </ChooseBlock>
  );
}
