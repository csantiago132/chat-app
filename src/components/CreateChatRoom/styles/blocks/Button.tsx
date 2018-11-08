/**
 * Button
 *
 */

import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

interface IButton {
  type?: string;
  buttonState: any;
  children: string | object;
}

const Button =
  styled.button <
  IButton >
  `
  ${(props) =>
    props.buttonState
      ? base_styles.buttons.disabled
      : base_styles.buttons.default};
  ${base_styles.typography.type_m};
  margin-top: ${(props) => props.theme.spacing.s};
  padding: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.color.color_offwhite};
  
`;

export default Button;
