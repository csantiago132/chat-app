import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const P = styled.p`
  ${base_styles.typography.type_s};

  color: ${(props) => props.theme.color.color_darkgray};
`;

export default P;
