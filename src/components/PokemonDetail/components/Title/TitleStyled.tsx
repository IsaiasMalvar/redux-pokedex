import { styled } from "styled-components";

const TitleStyled = styled.span<{ $typeColor: string }>`
  text-align: center;
  font-weight: bold;
  margin: 1.5rem 0;
  font-size: 20px;
  color: ${(props) => props.$typeColor};
`;

export default TitleStyled;
