import { styled } from "../../../../setup/theme";

const Img = styled.img`
  border: 1px solid ${(props) => props.theme.color.color_accent_color};
  border-radius: 100%;
  height: auto;
  height: ${(props) => props.theme.spacing.m};
  margin-right: ${(props) => props.theme.spacing.xs};
  min-height: ${(props) => props.theme.spacing.m};
  min-width: ${(props) => props.theme.spacing.m};
  width: ${(props) => props.theme.spacing.m};
`;

export default Img;
