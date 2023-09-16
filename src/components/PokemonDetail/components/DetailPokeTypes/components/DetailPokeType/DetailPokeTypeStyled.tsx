import { styled } from "styled-components";

const DetailPokeTypeStyled = styled.div<{
  $typeColor: string;
}>`
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  background: ${(props) => props.$typeColor};
`;

export default DetailPokeTypeStyled;
