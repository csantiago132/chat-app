import { Col } from "react-styled-flexboxgrid";
import { styled } from "../../../../setup/theme";

const MainSection = styled(Col)`
  display: flex;
  padding: 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.grid.container.lg}em) {
    display: flex;
  }
`;

export default MainSection;
