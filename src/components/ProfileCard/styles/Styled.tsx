import { styled } from "../../../setup/theme";
import Img from "./blocks/Img";
import Button from "./blocks/Button";
import P from "./elements/P";

const Span = styled.span`
  align-items: center;
  background: ${(props) => props.theme.color.color_white};
  border-radius: ${(props) => props.theme.spacing.base};
  box-shadow: ${(props) => props.theme.boxshadow.small};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.theme.spacing.m};
  padding: ${(props) => props.theme.spacing.s};
  width: 100%;
  max-width: 400px;
`;

// combine styled-component to a single default export
const Styled = {
  Button,
  Img,
  P,
  Span
};

export default Styled;
