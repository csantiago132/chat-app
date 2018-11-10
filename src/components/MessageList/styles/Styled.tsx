/**
 * MessageList styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */

import { styled } from "../../../setup/theme";
import Img from "./blocks/Img";
import Header from "./blocks/Header";
import Button from "./blocks/Button";
import Aside from "./blocks/Aside";
import H1 from "./elements/H1";
import Time from "./elements/Time";
import P from "./elements/P";

// main component holder
const Article = styled.article`
  background: ${(props) => props.theme.color.color_white};
  border-bottom: 1px solid ${(props) => props.theme.color.color_lightgray};
  border-radius: ${(props) => props.theme.spacing.base};
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: nowrap;
  margin-bottom: ${(props) => props.theme.spacing.s};
  padding: ${(props) => props.theme.spacing.xs};
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.color.color_offwhite};
    border-radius: ${(props) => props.theme.spacing.xs};

    ${Button} {
      display: block;
    }
  }
`;

// combine styled-component to a single default export
const Styled = {
  Article,
  Aside,
  Button,
  H1,
  Header,
  Img,
  P,
  Time
};

export default Styled;
