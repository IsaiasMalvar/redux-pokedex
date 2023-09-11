import { styled } from "styled-components";
import { Link } from "react-router-dom";

const PokemonCardStyled = styled(Link)<{ $typeColor?: string }>`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  box-shadow: none;
  transition: box-shadow 1s ease;

  .poke-card {
    &__top-section {
      display: flex;
      flex-direction: column;
      border: 1px solid transparent;
      border-start-start-radius: 8px;
      border-start-end-radius: 8px;
      border-bottom: none;
      border-color: ${(props) => props.$typeColor};
    }

    &__id {
      align-self: end;
      padding: 4px 8px 0px;
    }

    &__image {
      width: 90%;
      height: 140px;
      object-fit: contain;
      align-self: center;
      padding: 0.5rem 1rem;
    }

    &__name {
      font-size: 16px;
      line-height: 16px;
      padding: 1rem;
      border-end-start-radius: 8px;
      border-end-end-radius: 8px;
      text-align: center;
      text-transform: capitalize;
      color: white;
      background-color: ${(props) => props.$typeColor};
    }

    &:hover {
      box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
      -webkit-box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
      -moz-box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
      animation: shake-lr 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }

    @keyframes shake-lr {
      0%,
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
      10% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
      }
      20%,
      40%,
      60% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
      30%,
      50%,
      70% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
      }
      80% {
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg);
      }
      90% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
      }
    }
  }
`;

export default PokemonCardStyled;
