/**
 * Box Shadows
 * 
 */

import { rem } from 'polished';

const spacingDefault = 4;

export const spacing = {
  base: (): string => {
    const value = spacingDefault;
    return rem(`${value}px`)
  },
  
  xs: (): string => {
    const value = spacingDefault * 2;
    return rem(`${value}px`)
  },

  s: (): string => {
    const value = spacingDefault * 4;
    return rem(`${value}px`)
  },

  root: (): string => {
    const value = spacingDefault * 6;
    return rem(`${value}px`)
  },

  reg: (): string => {
    const value = spacingDefault * 8;
    return rem(`${value}px`)
  },

  m: (): string => {
    const value = spacingDefault * 9;
    return rem(`${value}px`)
  },

  l: (): string => {
    const value = spacingDefault * 10;
    return rem(`${value}px`)
  },

  xl: (): string => {
    const value = spacingDefault * 20;
    return rem(`${value}px`)
  },

  xxl: (): string => {
    const value = spacingDefault * 40;
    return rem(`${value}px`)
  },
};
