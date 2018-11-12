import { Col } from "react-styled-flexboxgrid";
import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const Aside = styled(Col)`
  background: ${(props) => props.theme.color.color_offwhite};

  h1 {
    ${base_styles.typography.type_reg};
  }
`;

export default Aside;
