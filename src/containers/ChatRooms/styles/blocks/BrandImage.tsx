import { styled } from "../../../../setup/theme";

const BrandImage = styled.img`
  height: auto;
  max-width: 40px;
  padding: ${(props) => props.theme.spacing.reg} 0;
  width: 100%;
`;

export default BrandImage;
