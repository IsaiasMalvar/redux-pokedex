import { styled } from "styled-components";

const HeaderStyled = styled.header`
  padding: 1rem 0;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  animation: tracking-in-contract 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }

  .header {
    &__container {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
    &__text {
      color: #212121;
      font-size: 1.8rem;
      line-height: 2rem;
      font-weight: 700;
    }
  }
`;

export default HeaderStyled;
