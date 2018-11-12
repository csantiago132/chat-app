/**
 * InputField component
 *
 */

import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const InputField = styled.input`
  ${base_styles.typography.type_s};

  align-self: center;
  background-color: ${(props) => props.theme.color.color_offwhite};
  border: 1px solid ${(props) => props.theme.color.color_interactive};
  border-radius: ${(props) => props.theme.spacing.s};
  box-shadow: ${(props) => props.theme.boxshadow.base};
  height: ${(props) => props.theme.spacing.l};
  padding: ${(props) => props.theme.spacing.base}
    ${(props) => props.theme.spacing.reg};
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.color.color_white};
    border: 1px solid ${(props) => props.theme.color.color_hover};
  }

  &:focus {
    box-shadow: ${(props) => props.theme.boxshadow.base};
    color: ${(props) => props.theme.color.color_interactive};
    outline: none;
  }

  &:placeholder {
    color: ${(props) => props.theme.color.color_interactive};
  }
`;

export default InputField;
