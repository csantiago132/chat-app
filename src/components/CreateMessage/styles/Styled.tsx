/**
 * CreateMessage styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */

import { styled } from "../../../setup/theme";
import InputField from "./blocks/InputField";
import Form from "./blocks/Form";

// main component holder
const Span = styled.span`
  bottom: 0;
  position: absolute;
  width: 100%;
`;

// combine styled-component to a single default export
const Styled = {
  Form,
  InputField,
  Span
};

export default Styled;
