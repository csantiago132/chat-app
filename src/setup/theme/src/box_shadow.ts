/**
 * Box Shadows
 * 
 * Each method contains it's own settings for readability and 
 * easier maintainability.  
 * 
 */

import { Interpolation } from 'styled-components';
import { rgba } from 'polished';
import { css } from '../index';
import spacing   from './spacing';
import color  from './color';

export interface IBox_Shadow{
  base: MethodDecorator;
  interactive: MethodDecorator;
  small: MethodDecorator;
}

const box_shadow = {
  base: (): Interpolation<any> => {
    const h_offset = 0;
    const v_offset = spacing.base;
    const blur = spacing.l;
    const spread = 0;
    const shadowColor = rgba(color.color_black, 0.2);

    return css`${h_offset} ${v_offset} ${blur} ${spread} ${shadowColor}`;
  },

  interactive: (): Interpolation<any> => {
    const h_offset = 0;
    const v_offset = spacing.base;
    const blur = spacing.base;
    const spread = 0;
    const shadowColor = rgba(color.color_interactive, 0.24);

    return css`${h_offset} ${v_offset} ${blur} ${spread} ${shadowColor}`;
  },

  small: (): Interpolation<any> => {
    const h_offset = 0;
    const v_offset = spacing.base;
    const blur = spacing.base;
    const spread = 0;
    const shadowColor = rgba(color.color_black, 0.1);

    return css`${h_offset} ${v_offset} ${blur} ${spread} ${shadowColor}`;
  },
}

export default box_shadow;