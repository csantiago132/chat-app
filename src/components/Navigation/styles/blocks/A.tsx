import { Link } from "react-router-dom";
import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const A = styled(Link)`
  ${base_styles.buttons.nav_link_default};

  margin-right: ${(props) => props.theme.spacing.m};
`;

export default A;
