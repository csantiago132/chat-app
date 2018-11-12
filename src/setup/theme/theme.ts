import grid  from './src/grid';
import spacing  from './src/spacing';
import color  from './src/color';
import breakpoint  from './src/breakpoint';
import box_shadow  from './src/box_shadow';

export interface ITheme {
  maxWidth: string;
  boxshadow: object;
  spacing: object;
  typography: object;
}

const theme = {
  maxWidth: '100%',
  boxshadow: box_shadow,
  spacing: spacing,
  grid,
  color,
  breakpoint,
};

export default theme;