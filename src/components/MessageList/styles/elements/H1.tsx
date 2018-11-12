import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const H1 = styled.h1`
  ${base_styles.typography.type_xxs};

  color: ${(props) => props.theme.color.color_black};
  display: inline;
  margin: 0;
`;

export default H1;
