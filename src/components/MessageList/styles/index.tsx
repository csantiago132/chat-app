/**
 * MessageList styled
 *
 * Main file for all styles used on this component
 * Also holds main-outer container styles
 *
 */

import { styled } from "../../../setup/theme";

// main component holder
const Article = styled.article`
  bottom: 0;
  position: absolute;
  width: 100%;
`;

// combine styled-component to a single default export
export const Styled = {
  Article
};
