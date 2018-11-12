import { Row } from "react-styled-flexboxgrid";
import { styled } from "../../../setup/theme";
import Aside from "./blocks/Aside";
import AsideInfo from "./blocks/AsideInfo";
import Header from "./blocks/Header";
import MainSection from "./blocks/MainSection";
import Section from "./blocks/Section";

const Main = styled(Row)`
  height: 100%;
  margin: 0;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Styled = {
  Aside,
  AsideInfo,
  Header,
  Main,
  MainSection,
  Section
};

export default Styled;
