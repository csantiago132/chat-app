/**
 * InputField component
 *
 */

import { styled } from "../../../../setup/theme";

const InputField = styled.input`
  appearance: none;
  height: 50px;
  border-left: ${(props): string => props.theme.color.color_white};
  background-color: ${(props): string => props.theme.color.color_offwhite};
  border-width: 0 0 0 1px;
  border-radius: 4px;
  border-style: solid;
  color: ${(props): string => props.theme.color.color_darkblue};
  outline: none;
  position: relative;
  transition: all 0.2s ease-in-out;
  font-size: 18px;

  &:hover {
    border-width: 0 0 0 1px;
    border-left: 1px solid ${(props): string => props.theme.color.color_hover};
    color: ${(props): string => props.theme.color.color_hover};
  }

  &:focus {
    border-width: 0 0 0 1px;
    border-left: 1px solid
      ${(props): string => props.theme.color.color_interactive};
    color: ${(props): string => props.theme.color.color_active};
  }

  &:active {
    color: ${(props): string => props.theme.color.color_focus};
  }
`;

export default InputField;
