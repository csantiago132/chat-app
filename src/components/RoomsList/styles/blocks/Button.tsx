import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const Button = styled.button`
  ${base_styles.buttons.side_nav_default};
  ${base_styles.typography.type_s};

  height: 44px;
  width: 90%;
`;

export default Button;
