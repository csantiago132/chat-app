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
  primary_default: any;
  primary_disabled: MethodDecorator;
  secondary_default: MethodDecorator;
  secondary_disabled: MethodDecorator;
}

const buttons = {
  primary_default: (): any => {
    return (css`
      background: ${theme.color.color_interactive};
      border: none;
      border-radius: ${theme.spacing.base};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      outline: none;
      
      &:hover {
        background: ${theme.color.color_hover};
      }

      &:active {
        background: ${theme.color.color_active};
      }
    `)
  },

  primary_disabled: (): any => {
    return (css`
      background: ${theme.color.color_darkgray};
      border: none;
      border-radius: ${theme.spacing.base};
      cursor: not-allowed;
      outline: none;
    `)
  },

  secondary_default: (): any => {
    return (css`
      background: ${theme.color.color_white};
      border: none;
      border: 1px solid ${theme.color.color_interactive};
      border-radius: ${theme.spacing.base};
      color: ${theme.color.color_interactive};
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      outline: none;
      
      &:hover {
        background: ${theme.color.color_background_color};
        border: 1px solid ${theme.color.color_hover};
        color: ${theme.color.color_hover};
      }

      &:active {
        background: ${theme.color.color_active};
      }
    `)
  },
  
  secondary_disabled: (): any => {
    return (css`
      background: ${theme.color.color_lightgray};
      border: none;
      border: 1px solid ${theme.color.color_darkgray};
      border-radius: ${theme.spacing.base};
      color: ${theme.color.color_darkgray};
      cursor: not-allowed;
      outline: none;
    `)
  },
};

export default buttons;