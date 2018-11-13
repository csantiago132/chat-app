import { styled } from "../../../../setup/theme";
import base_styles from "../../../../setup/theme/styles/base_styles";

const SpanChatRoomHeader = styled.span`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  h1 {
    ${base_styles.typography.type_reg};
    font-weight: 500;
    margin: 0;
  }
`;

export default SpanChatRoomHeader;
