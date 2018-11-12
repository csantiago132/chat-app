/**
 * H3 component
 *
 */

import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const H3 = styled.h3`
  ${base_styles.typography.type_m};

  color: ${(props) => props.theme.color.color_darkblue};
  margin-bottom: ${(props) => props.theme.spacing.s};
`;

export default H3;
