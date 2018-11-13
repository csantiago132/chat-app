import { styled } from "../../../setup/theme";
import { Grid } from "react-styled-flexboxgrid";
import base_styles from "../../../setup/theme/styles/base_styles";

interface ISection {
  active: boolean;
}

const Section =
  styled(Grid) <
  ISection >
  `
  ${(props) =>
    props.active
      ? base_styles.modal_container.isOpen
      : base_styles.modal_container.isClose};
`;

const Styled = {
  Section
};

export default Styled;
