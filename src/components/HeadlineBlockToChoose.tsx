import React from 'react';

import { BlockToChoose } from 'src/components';
import { HeadlineIcon } from 'src/icons';

export function HeadlineBlockToChoose() {
  return (
    <BlockToChoose type="headline">
      <HeadlineIcon />
    </BlockToChoose>
  );
}
