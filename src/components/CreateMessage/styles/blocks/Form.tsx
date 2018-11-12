/**
 * Form
 *
 */

import { styled } from "../../../../setup/theme";

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.base}
    ${(props) => props.theme.spacing.s};
  width: 100%;
`;

export default Form;
