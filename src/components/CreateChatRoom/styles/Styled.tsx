/**
 * CreateChatroom styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */

import { styled } from "../../../setup/theme";
import InputField from "./blocks/InputField";
import Button from "./blocks/Button";
import Label from "./elements/Label";

// main component holder
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.color_offwhite};
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

// combine styled-component to a single default export
const Styled = {
  Button,
  Form,
  InputField,
  Label
};

export default Styled;
