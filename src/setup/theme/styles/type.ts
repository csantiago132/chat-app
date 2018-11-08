import { em } from 'polished';
import { css } from '../index';
import theme from '../theme';

export interface ITypography {
  type_xxl: MethodDecorator;
  type_xl: MethodDecorator;
  type_l: MethodDecorator;
  type_m: MethodDecorator;
  type_reg: MethodDecorator;
  type_base: MethodDecorator;
  type_s: MethodDecorator;
  type_xs: MethodDecorator;
  type_xxs: MethodDecorator;
}

const typography = {
  type_xxl: () => {
    const sizes = {
      mobile: '40px',
      tablet: '45px',
      tablet_landscape: '45px',
      desktop: '45px',
    }
    
    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
    
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_xl: () => {
    const sizes ={
      mobile: '30px',
      tablet: '31.104px',
      tablet_landscape: '31.104px',
      desktop: '35.596px',
    }
    
    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_l: () => {
    const sizes ={
      mobile: '25.92px',
      tablet: '30px',
      tablet_landscape: '30px',
      desktop: '35.596px',
    }

    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_m: () => {
    const sizes ={
      mobile: '22.92px',
      tablet: '26px',
      tablet_landscape: '26.596px',
      desktop: '30px',
    }

    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_reg: () => {
    const sizes ={
      mobile: '20px',
      tablet: '20px',
      tablet_landscape: '20px',
      desktop: '20px',
    }

    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_base: () => {
    const sizes ={
      mobile: '18px',
      tablet: '18px',
      tablet_landscape: '18px',
      desktop: '18px',
    }

    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_s: () => {
    const sizes ={
      mobile: '16px',
      tablet: '16px',
      tablet_landscape: '16px',
      desktop: '16px',
    }

    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_xs: () => {
    const sizes ={
      mobile: '14px',
      tablet: '14px',
      tablet_landscape: '14px',
      desktop: '14px',
    }

    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },

  type_xxs: () => {
    const sizes ={
      mobile: '12px',
      tablet: '12px',
      tablet_landscape: '12px',
      desktop: '12px',
    }
    
    return (css`
      font-size: ${sizes.mobile};
      font-size: ${em(`${sizes.mobile}`)};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
        font-size: ${em(`${sizes.tablet}`)};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
        font-size: ${em(`${sizes.tablet_landscape}`)};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
        font-size: ${em(`${sizes.desktop}`)};
      }
    `)
  },
};

export default typography;