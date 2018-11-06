/**
 * Theme Interface
 * 
 * Import all interfaces from the theme settings, gets combined and
 * exported as the main interface of Styled Components
 * 
 */

import IBox_Shadow from './src/box_shadow';
import IBreakpoint from './src/breakpoint';
import IColor from './src/color';
import IGrid from './src/grid';
import ISpacing from './src/spacing';
import ITheme from './appTheme';

export default interface ThemeInterface extends 
IBox_Shadow,
IBreakpoint,
IColor,
IGrid,
ISpacing,
ITheme
{}