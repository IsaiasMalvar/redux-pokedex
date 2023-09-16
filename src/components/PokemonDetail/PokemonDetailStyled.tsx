import { styled } from "styled-components";

const PokemonDetailStyled = styled.article<{ $typeColor: string }>`
  height: 150vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.$typeColor};

  .info {
    max-width: 650px;
    width: 95%;
    background-color: white;
    height: 100vh;
    bottom: 0;
    position: relative;
    margin-bottom: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    position: absolute;
    margin: 0 auto;
    margin-top: -150px;
    width: 175px;
    height: 175px;
    object-fit: contain;
  }
`;

export default PokemonDetailStyled;
