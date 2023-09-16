import { styled } from "styled-components";

const DetailHeaderStyled = styled.header`
  position: relative;
  max-width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  color: white;

  .pokedetail-header {
    &--icon {
      height: fit-content;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 1rem;
      margin-top: 1rem;
      width: 250px;
    }

    &__info-container {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        cursor: pointer;
      }

      svg:hover {
        transform: scale(1.2);
        transition-duration: 0.3s;
      }
    }
  }

  span {
    font-weight: 700;
    text-transform: capitalize;
    font-size: 2rem;
  }

  p {
    font-weight: 700;
    font-size: 2rem;
  }
`;

export default DetailHeaderStyled;
