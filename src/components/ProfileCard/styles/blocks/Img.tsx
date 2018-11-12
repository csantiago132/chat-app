import { styled } from "../../../../setup/theme";

const Img = styled.img`
  border: 1px solid ${(props) => props.theme.color.color_accent_color};
  border-radius: 100%;
  height: auto;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  max-height: ${(props) => props.theme.spacing.m};
  max-width: ${(props) => props.theme.spacing.m};
  width: 100%;
`;

export default Img;
