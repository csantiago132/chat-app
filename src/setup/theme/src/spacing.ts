/**
 * Box Shadows
 * 
 */

import { em } from 'polished';

export interface ISpacing {
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

const spacing = {
  base: (): string => {
    const value: number = spacingDefault;
    return em(`${value}px`)
  },
  
  xs: (): string => {
    const value: number = spacingDefault * 2;
    return em(`${value}px`)
  },

  s: (): string => {
    const value: number = spacingDefault * 4;
    return em(`${value}px`)
  },

  root: (): string => {
    const value: number = spacingDefault * 6;
    return em(`${value}px`)
  },

  reg: (): string => {
    const value: number = spacingDefault * 8;
    return em(`${value}px`)
  },

  m: (): string => {
    const value: number = spacingDefault * 9;
    return em(`${value}px`)
  },

  l: (): string => {
    const value: number = spacingDefault * 10;
    return em(`${value}px`)
  },

  xl: (): string => {
    const value: number = spacingDefault * 20;
    return em(`${value}px`)
  },

  xxl: (): string => {
    const value: number = spacingDefault * 40;
    return em(`${value}px`)
  },
};

export default spacing;