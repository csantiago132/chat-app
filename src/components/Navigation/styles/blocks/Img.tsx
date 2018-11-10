import { styled } from "../../../../setup/theme";

const Img = styled.img`
  float: left;
  height: ${(props) => props.theme.spacing.reg};
  margin-right: ${(props) => props.theme.spacing.xl};
  width: auto;
`;

export default Img;
