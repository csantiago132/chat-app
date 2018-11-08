/**
 * Define a theme interface
 * 
 * By default every styled component will have the theme prop set to any. 
 * When building complex apps it would be better to have autocomplete 
 * and error checks everywhere.
 * 
 */

import * as styledComponents from "styled-components";
import baseStyled, { ThemedStyledInterface } from 'styled-components';

/**
 * To have autocomplete and checks around the theme prop,
 * define the theme interface for the app:
 */
import ThemeInterface from "./theme_Interface";

import theme from './theme'

/**
 * instead of importing the styled functions from the 
 * styled-components module, we import it from our above, custom module.
 */
const {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export type Theme = typeof theme;
export { css, createGlobalStyle, ThemeProvider, theme, keyframes };

/**
 * re-export the styled function with our custom theme interface:
 */
export const styled = baseStyled as ThemedStyledInterface<Theme>;