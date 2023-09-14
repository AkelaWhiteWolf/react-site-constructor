import React, { ReactNode } from 'react';

import { HeadlineIcon, ImageIcon, ParagraphIcon } from 'src/icons';

import { PossibleBlockType } from 'src/types';

export const getIconByBlocksType = (type: PossibleBlockType) => {
  switch (type) {
    case 'headline':
      return HeadlineIcon;

    case 'paragraph':
      return ParagraphIcon;

    case 'image':
      return ImageIcon;

    case 'button':
      return ImageIcon;

    default:
      return ImageIcon;
  }
};
