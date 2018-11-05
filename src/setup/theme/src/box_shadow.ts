/**
 * Box Shadows
 * 
 * Each method contains it's own settings for readability and 
 * easier maintainability.  
 * 
 */

import { rgba } from 'polished';
import { spacing }  from './spacing';
import { color } from './color';

export const box_shadow = {
  base: (): string => {
    const h_offset = 0;
    const v_offset = spacing.base;
    const blur = spacing.l;
    const spread = 0;
    const shadowColor = rgba(color.black, 0.2);

    return `${h_offset} ${v_offset} ${blur} ${spread} ${shadowColor}`;
  },

  interactive: (): string => {
    const h_offset = 0;
    const v_offset = spacing.base;
    const blur = spacing.base;
    const spread = 0;
    const shadowColor = rgba(color.interactive, 0.24);

    return `${h_offset} ${v_offset} ${blur} ${spread} ${shadowColor}`;
  }
}

