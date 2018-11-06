/**
 * Box Shadows
 * 
 */

import { rem } from 'polished';

export default interface ISpacing {
  base: MethodDecorator
  xs: MethodDecorator
  s: MethodDecorator
  root: MethodDecorator
  reg: MethodDecorator
  m: MethodDecorator
  l: MethodDecorator
  xl: MethodDecorator
  xxl: MethodDecorator
}

const spacingDefault = 4;

export const spacing = {
  base: (): string => {
    const value: number = spacingDefault;
    return rem(`${value}px`)
  },
  
  xs: (): string => {
    const value: number = spacingDefault * 2;
    return rem(`${value}px`)
  },

  s: (): string => {
    const value: number = spacingDefault * 4;
    return rem(`${value}px`)
  },

  root: (): string => {
    const value: number = spacingDefault * 6;
    return rem(`${value}px`)
  },

  reg: (): string => {
    const value: number = spacingDefault * 8;
    return rem(`${value}px`)
  },

  m: (): string => {
    const value: number = spacingDefault * 9;
    return rem(`${value}px`)
  },

  l: (): string => {
    const value: number = spacingDefault * 10;
    return rem(`${value}px`)
  },

  xl: (): string => {
    const value: number = spacingDefault * 20;
    return rem(`${value}px`)
  },

  xxl: (): string => {
    const value: number = spacingDefault * 40;
    return rem(`${value}px`)
  },
};
