/**
 * Grid
 * 
 * Settings for the react-styled-flexboxgrid package
 * 
 */
export default interface IGrid {
  gridSize: number;
  gutterWidth: number;
  outerMargin: number;
  mediaQuery: string;
  container: {
    sm: number
    md: number
    lg: number
  },
  breakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
  },
}
export const grid = {
  gridSize: 12, // columns
  gutterWidth: 1, // rem
  outerMargin: 0.6, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 48, // em
    md: 64, // em
    lg: 75, // em
  },
};
