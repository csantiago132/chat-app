/**
 * Breakpoints
 * 
 * Settings for the breakpoints of the app
 * 
 */
export interface IBreakpoint {
  breakpoint_xxxs: string;
  breakpoint_xxs: string;
  breakpoint_xs: string;
  breakpoint_s: string;
  breakpoint_small: string;
  breakpoint_m: string;
  breakpoint_l: string;
  breakpoint_xl: string;
  breakpoint_xxl: string;
  breakpoint_monitors: string;
}

const breakpoint = {
  breakpoint_xxxs: '320px',
  breakpoint_xxs: '375px',
  breakpoint_xs: '480px',
  breakpoint_s: '667px',
  breakpoint_small: '668px',
  breakpoint_m: '768px',
  breakpoint_l: '1024px',
  breakpoint_xl: '1188px',
  breakpoint_xxl: '1440px',
  breakpoint_monitors: '1600px',
};

export default breakpoint;