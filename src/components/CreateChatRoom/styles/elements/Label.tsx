/**
 * Label component
 *
 */

import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const Label = styled.label`
  ${base_styles.typography.type_reg};

  color: ${(props) => props.theme.color.color_darkblue};
  margin-bottom: ${(props) => props.theme.spacing.s};
`;

export default Label;
