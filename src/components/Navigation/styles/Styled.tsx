/**
 * Navigation styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */

import { rgba } from "polished";
import { styled } from "../../../setup/theme";
import A from "./blocks/A";
import Nav from "./blocks/Nav";
import Img from "./blocks/Img";

const Header = styled.header`
  background-color: ${rgba("#ffffff", 0.95)};
  border-bottom: 1px solid ${(props) => props.theme.color.color_darkgray};
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.theme.spacing.xs};
  position: relative;
  width: 100%;
  z-index: 9999;
`;

const Styled = {
  A,
  Header,
  Img,
  Nav
};

export default Styled;
