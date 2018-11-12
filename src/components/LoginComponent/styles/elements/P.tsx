/**
 * P element
 *
 */

import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const P = styled.p`
  ${base_styles.typography.type_s};

  border-top: 1px solid ${(props) => props.theme.color.color_lightgray};
  color: ${(props) => props.theme.color.color_darkgray};
  margin-top: ${(props) => props.theme.spacing.s};
  padding-top: ${(props) => props.theme.spacing.xs};
  text-align: center;
`;

export default P;
