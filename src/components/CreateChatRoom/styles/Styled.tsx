/**
 * CreateChatroom styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */
import { Col } from "react-styled-flexboxgrid";
import { styled } from "../../../setup/theme";
import base_styles from "../../../setup/theme/styles/base_styles";
import InputField from "./blocks/InputField";
import Button from "./blocks/Button";
import Label from "./elements/Label";

interface IForm {
  onSubmit?: any;
  id: string;
}

// main component holder
const Form =
  styled(Col) <
  IForm >
  `
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.color_white};
  border-radius: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.l};
  position: relative;
  box-shadow: ${(props) => props.theme.boxshadow.base};

  @media (min-width: ${(props) => props.theme.grid.container.lg}em) {
    display: flex;
  }
`;

// combine styled-component to a single default export
const Styled = {
  Button,
  Form,
  InputField,
  Label
};

export default Styled;
