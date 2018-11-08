
/**
 * Button template to reuse across the project
 * 
 * Has only basic styling, no width and height since those can be set 
 * on each individual component where these base styles
 * are going to be used
 * 
 * interface is being used to provide auto-complete
 * 
 * Example:
 * 
 * interface IExampleButton {
 *  isDisabled: boolean;
 * }
 *  
 * const ExampleButton = styled.button<IExampleButton>`
 *  ${props => props.theme.base_styles.theme_button.default}
 *  
 *  width: 40px;
 *  height: 200px;
 * 
 *  ${({isDisable}) => isDisable && `
 *    ${props => props.theme.base_styles.theme_button.disabled};
 *    width: 80px;
 *    height: 300px;
 *  `}
 * `;
 */

import { css } from '../index';
import theme from '../theme';

export interface ITypography {
  h1: MethodDecorator;
  h2: MethodDecorator;
  h3: MethodDecorator;
  h4: MethodDecorator;
  h5: MethodDecorator;
  h6: MethodDecorator;
  p: MethodDecorator;
  a_href: MethodDecorator;
  blockquote: MethodDecorator;
  strong: MethodDecorator;
}

const typography = {
  h1: () => {
    const sizes ={
      mobile: '40px',
      tablet: '45px',
      tablet_landscape: '45px',
      desktop: '45px',
    }
    
    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  h2: () => {
    const sizes ={
      mobile: '30px',
      tablet: '31.104px',
      tablet_landscape: '31.104px',
      desktop: '35.596px',
    }

    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  h3: () => {
    const sizes ={
      mobile: '25.92px',
      tablet: '30px',
      tablet_landscape: '30px',
      desktop: '35.596px',
    }

    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  h4: () => {
    const sizes ={
      mobile: '22.92px',
      tablet: '26px',
      tablet_landscape: '26.596px',
      desktop: '40px',
    }

    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  h5: () => {
    const sizes ={
      mobile: '22.92px',
      tablet: '26px',
      tablet_landscape: '26.596px',
      desktop: '40px',
    }

    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  h6: () => {
    const sizes ={
      mobile: '22.92px',
      tablet: '26px',
      tablet_landscape: '26.596px',
      desktop: '40px',
    }

    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  p: () => {
    const sizes ={
      mobile: '18px',
      tablet: '18px',
      tablet_landscape: '24px',
      desktop: '24px',
    }

    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  a_href: () => {
    const sizes ={
      mobile: '18px',
      tablet: '18px',
      tablet_landscape: '24px',
      desktop: '24px',
    }
    
    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  },

  blockquote: () => {
    const sizes ={
      mobile: '22px',
      tablet: '22px',
      tablet_landscape: '22px',
      desktop: '28px',
    }
    
    return (css`
      font-size: ${sizes.mobile};
      line-height: 1.2;
      
      @media (min-width: ${theme.grid.container.sm}em) {
        font-size: ${sizes.tablet};
      }
      @media (min-width: ${theme.grid.container.md}em) {
        font-size: ${sizes.tablet_landscape};
      }
      @media (min-width: ${theme.grid.container.lg}em) {
        font-size: ${sizes.desktop};
      }
    `)
  }
};

export default typography;