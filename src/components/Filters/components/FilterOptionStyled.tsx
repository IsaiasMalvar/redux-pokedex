import { styled } from "styled-components";

const OptionsStyled = styled.option<{ $typeColor?: string }>`
  background-color: ${(props) => props.$typeColor};
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

export default OptionsStyled;
