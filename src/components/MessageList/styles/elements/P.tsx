import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const P = styled.p`
  ${base_styles.typography.type_xs};

  color: ${(props) => props.theme.color.color_black};
  display: block;
  margin-bottom: 0;
  position: relative;
`;

export default P;
