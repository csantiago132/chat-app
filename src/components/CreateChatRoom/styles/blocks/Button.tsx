/**
 * Button
 *
 */

import { styled } from "../../../../setup/theme";

interface IButton {
  type: string;
  disabled: boolean;
  children: string | object;
}

const Button =
  styled.button <
  IButton >
  `
  background: ${(props) => props.theme.color.color_interactive};
  height: ${(props) => props.theme.spacing.reg}

  &:hover {
    background: ${(props) => props.theme.color.color_hover};
  }

  &:active{
    background: ${(props) => props.theme.color.color_active};
  }

  ${({ disabled }) =>
    disabled &&
    `
    background: ${(props: any) => props.theme.color.color_darkgray}; 
  `}
`;

export default Button;
