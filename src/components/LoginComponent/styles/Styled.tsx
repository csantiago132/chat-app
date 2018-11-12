/**
 * LoginComponent styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */

import { Col } from "react-styled-flexboxgrid";
import { styled } from "../../../setup/theme";
import Button from "./blocks/Button";
import Img from "./blocks/Img";
import P from "./elements/P";
import H3 from "./elements/H3";

const Article = styled(Col)`
  align-content: center;
  background-color: ${(props) => props.theme.color.color_white};
  border-radius: ${(props) => props.theme.spacing.s};
  box-shadow: ${(props) => props.theme.boxshadow.base};
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing.reg};
  padding: ${(props) => props.theme.spacing.m};
  text-align: center;
`;

const Styled = {
  Article,
  Button,
  H3,
  Img,
  P
};

export default Styled;
