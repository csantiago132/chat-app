import { Col } from "react-styled-flexboxgrid";
import { styled } from "../../../../setup/theme";

const Section = styled(Col)`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin: ${(props) => props.theme.spacing.xl} 0
    ${(props) => props.theme.spacing.l};
  width: 100%;
`;

export default Section;
