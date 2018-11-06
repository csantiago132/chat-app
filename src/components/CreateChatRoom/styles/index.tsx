/**
 * CreateChatroom styled
 *
 * Styles for
 *
 */

import { styled } from "../../../setup/theme";
import InputField from "./blocks/InputField";
import Label from "./elements/Label";

// main component holder
const Form = styled.form`
  background: ${(props) => props.theme.color.color_gray};
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

// combine styled-component to a single default export
export const Styled = {
  Form,
  InputField,
  Label
};

export default Styled;
