import { styled } from "../../../../setup/theme";

const Button = styled.button`
  background: transparent;
  color: ${(props) => props.theme.color.color_interactive};
  display: none;
  padding: 0;
  width: 10%;
`;

export default Button;
