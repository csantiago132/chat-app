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
      ? base_styles.buttons.primary_disabled
      : base_styles.buttons.secondary_default};
  ${base_styles.typography.type_m};
  margin-top: ${(props) => props.theme.spacing.s};
  padding: ${(props) => props.theme.spacing.xs};
  
`;

export default Button;
