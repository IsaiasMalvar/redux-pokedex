import { styled } from "styled-components";

const PokemonListStyled = styled.ul`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    width: 100%;
    max-width: 350px;
  }
`;

export default PokemonListStyled;
