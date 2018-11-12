import { styled } from "../../../setup/theme";
import Button from "./blocks/Button";
import DeleteButton from "./blocks/DeleteButton";

const Article = styled.article`
  background: ${(props) => props.theme.color.color_offwhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    background: ${(props) => props.theme.color.color_white};

    ${DeleteButton} {
      display: block;
    }
  }
`;

// combine styled-component to a single default export
const Styled = {
  Article,
  Button,
  DeleteButton
};

export default Styled;
