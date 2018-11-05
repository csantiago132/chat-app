import { grid } from './src/grid';
import { type } from './src/typography';
import { spacing } from './src/spacing';
import { color } from './src/color';
import { breakpoint } from './src/breakpoint';
import { box_shadow } from './src/box_shadow';

const theme = {
  maxWidth: '100%',
  boxshadow: box_shadow,
  spacing: spacing,
  grid,
  color,
  breakpoint,
  typography: type,
};

export default theme;
