/**
 * input fields template to reuse across the project
 * 
 * Has only basic styling, no width and height since those can be set 
 * on each individual component where these base styles
 * are going to be used
 * 
 * interface is being used to provide auto-complete
 * 
 */

import { css } from '../index';
import theme from '../theme';

export interface IInputFields {
  default: MethodDecorator;
}

const input_fields ={
  default: () => {
    return(css`
      appearance: none;
      border-left: ${theme.color.color_white};
      background-color: ${theme.color.color_offwhite};
      border-width: 0 0 0 1px;
      border-radius: 4px;
      border-style: solid;
      color: ${theme.color.color_darkblue};
      outline: none;
      position: relative;
      transition: all 0.2s ease-in-out;
      font-size: 18px;
    
      &:hover {
        border-width: 0 0 0 1px;
        border-left: 1px solid ${theme.color.color_hover};
        color: ${theme.color.color_hover};
      }
    
      &:focus {
        border-width: 0 0 0 1px;
        border-left: 1px solid
          ${theme.color.color_interactive};
        color: ${theme.color.color_active};
      }
    
      &:active {
        color: ${theme.color.color_focus};
      }
    `)
  }
}

export default input_fields;