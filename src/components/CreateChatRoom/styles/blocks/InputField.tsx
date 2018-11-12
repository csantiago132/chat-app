/**
 * InputField component
 *
 */

import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const InputField = styled.input`
  ${base_styles.input_fields.default};

  height: 60px;
  padding: ${(props) => props.theme.spacing.s};
`;

export default InputField;
