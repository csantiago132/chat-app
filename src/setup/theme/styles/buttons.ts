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

import { Interpolation } from 'styled-components';
import { css } from '../index';
import theme from '../theme';

export interface IButtons {
  primary_default: MethodDecorator;
  primary_disabled: MethodDecorator;
  secondary_default: MethodDecorator;
  secondary_disabled: MethodDecorator;
  side_nav_default: MethodDecorator;
}

const buttons = {
  primary_default: (): Interpolation<any> => {
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

  primary_disabled: (): Interpolation<any> => {
    return (css`
      background: ${theme.color.color_darkgray};
      border: none;
      border-radius: ${theme.spacing.base};
      cursor: not-allowed;
      outline: none;
    `)
  },

  secondary_default: (): Interpolation<any> => {
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
  
  secondary_disabled: (): Interpolation<any> => {
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

  side_nav_default: (): Interpolation<any> => {
    return (css`
      background: transparent;
      border: none;
      border-left: 2px solid transparent;
      color: ${theme.color.color_darkblue};
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      padding-left: ${theme.spacing.s};
      transition: all 0.2s ease-in-out;
      outline: none;
      
      &:hover {
        border-left: 2px solid ${theme.color.color_hover};
        color: ${theme.color.color_hover};
      }

      &:active {
        border-left: 2px solid ${theme.color.color_interactive};
        color: ${theme.color.color_interactive}
      }
    `)
  },
  
  nav_link_default: (): Interpolation<any> => {
    return (css`
      align-items: center;
      background: transparent;
      border: none;
      color: ${theme.color.color_interactive}
      cursor: pointer;
      display: flex;
      padding-left: ${theme.spacing.s};
      transition: all 0.2s ease-in-out;
      outline: none;
      
      &:hover {
        color: ${theme.color.color_hover};
      }

      &:active {
        color: ${theme.color.color_interactive}
      }
    `)
  },
};

export default buttons;