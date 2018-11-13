import { Interpolation } from 'styled-components';
import { rgba } from 'polished';
import { css } from '../index';

export interface IModal {
  isOpen: MethodDecorator;
  isClose: MethodDecorator;
}

const modal_container = {
  isOpen: (): Interpolation<any> => {
    return (css`
      align-items: center;
      background: ${rgba('#f9f9f9', 0.9)};
      bottom: 0;
      display: flex;
      height: 100vh;
      justify-content: center;
      margin: 0;
      left: 0;
      opacity: 1;
      overflow-y: scroll;
      position: fixed;
      right: 0;
      top: 0;
      transition: all 0.4s;
      visibility: visible;
      width: 100vw;
      z-index: 9999;
    `);
  },
  
  isClose: (): Interpolation<any> => {
    return (css`
      align-items: center;
      bottom: 0;
      display: flex;
      height: 100vh;
      justify-content: center;
      margin: 0;
      left: 0;
      opacity: 0;
      overflow-y: scroll;
      position: fixed;
      right: 0;
      top: 0;
      transition: all 0.4s;
      visibility: hidden;
      width: 100vw;
      z-index: 9999;
    `);
  }
}

export default modal_container;