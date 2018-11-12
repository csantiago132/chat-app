import { styled } from "../../../../setup/theme";

const Button = styled.button`
  background: transparent;
  color: ${(props) => props.theme.color.color_interactive};
  display: none;
  margin-left: ${(props) => props.theme.spacing.s};
  padding: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color.color_black};
  }
`;

export default Button;
