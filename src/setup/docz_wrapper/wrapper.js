/**
 * Docz ThemProvider wrapper
 * 
 * This passes the styles to Docz for components that are using the 
 * ThemProvider props by styled-components
 * 
 */

import React from "react";
import { ThemeProvider } from 'styled-components';
import theme  from '../theme/theme.ts';
import base_styles  from '../theme/styles/base_styles.ts';
 
const Wrapper = ({ children }) => (
  <ThemeProvider theme={{...theme, ...base_styles}}>
    {children}
  </ThemeProvider>
)

export default Wrapper;