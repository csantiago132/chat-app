import { Row } from "react-styled-flexboxgrid";
import { styled } from "../../../setup/theme";
import Aside from "./blocks/Aside";
import AsideInfo from "./blocks/AsideInfo";
import BrandImage from "./blocks/BrandImage";
import ButtonInformation from "./blocks/ButtonInformation";
import Header from "./blocks/Header";
import MainSection from "./blocks/MainSection";
import Section from "./blocks/Section";
import SpanChatRoomHeader from "./blocks/SpanChatRoomHeader";

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
  BrandImage,
  ButtonInformation,
  Header,
  Main,
  MainSection,
  Section,
  SpanChatRoomHeader
};

export default Styled;
