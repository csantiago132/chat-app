/**
 * Button template to reuse across the project
 * 
 * Has only basic styling, no width and height since those can be set 
 * on each individual component where these base styles
 * are going to be used
 * 
 * interface is being used to provide auto-complete
 * 
 */
import { css } from '../index'
import theme from '../theme';

export interface IButtons {
  default: any;
  disabled: MethodDecorator;
}

const buttons = {
  default: (): any => {
    console.log(theme.spacing.base)
    return (css`
      background: ${theme.color.color_interactive};
      border-radius: ${theme.spacing.base};
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border: none;
      outline: none;
      
      &:hover {
        background: ${theme.color.color_hover};
      }

      &:active {
        background: ${theme.color.color_active};
      }
    `)
  },

  disabled: (): any => {
    return (css`
      background: ${theme.color.color_darkgray};
      border-radius: ${theme.spacing.base};
      cursor: not-allowed;
      border: none;
      outline: none;
    `)
  }
};

export default buttons;