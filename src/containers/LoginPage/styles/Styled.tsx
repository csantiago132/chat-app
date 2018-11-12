import { Grid } from "react-styled-flexboxgrid";
import { styled } from "../../../setup/theme";

const Main = styled(Grid)`
  align-items: center;
  background: ${(props) => props.theme.color.color_offwhite};
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const Styled = {
  Main
};
export default Styled;
