import React from 'react';

import { ChooseBlock } from 'src/components';
import { HeadlineIcon } from 'src/icons';

export function ChooseBlockHeadline() {
  return (
    <ChooseBlock type="headline">
      <HeadlineIcon />
    </ChooseBlock>
  );
}
