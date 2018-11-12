import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const Header = styled.header`
  align-items: center;
  align-self: flex-start;
  background-color: ${(props) => props.theme.color.color_white};
  border-bottom: 1px solid ${(props) => props.theme.color.color_lightgray};
  display: flex;
  height: ${(props) => props.theme.spacing.xl};
  justify-content: flex-start;
  padding: 0 ${(props) => props.theme.spacing.m};
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9999;

  h2 {
    ${base_styles.typography.type_reg};
    margin-bottom: 0;
  }
`;

export default Header;
