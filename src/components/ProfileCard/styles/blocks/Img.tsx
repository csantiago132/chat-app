import { styled } from "../../../../setup/theme";

const Img = styled.img`
  border: 1px solid ${(props) => props.theme.color.color_accent_color};
  border-radius: 100%;
  height: auto;
  max-height: 50px;
  max-width: 50px;
  width: 100%;
`;

export default Img;
