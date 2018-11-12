import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const Time = styled.time`
  ${base_styles.typography.type_xxs};

  color: ${(props) => props.theme.color.color_darkgray};
  display: inline;
  margin-left: ${(props) => props.theme.spacing.s};
`;

export default Time;
