import { styled } from "styled-components";

const DetailBaseStatsStyled = styled.div<{
  $typesColor: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  .base-stats {
    &__item {
      width: 100%;
      display: flex;
    }

    &__right {
      width: 60%;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &__line {
      width: 100%;
      position: relative;
    }

    &__background {
      width: 100%;
      height: 10px;
      opacity: 0.5;
      border-radius: 8px;
      background: ${(props) => props.$typesColor};
    }

    &__second-line {
      position: absolute;
      left: 0;
      height: 10px;
      top: 0;
      border-radius: 8px;
    }
  }

  p {
    width: 10%;
  }

  span {
    color: ${(props) => props.$typesColor};
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    text-align: right;
    width: 20%;
    margin: 0 1rem;
    padding-right: 1rem;
    border-right: 1px solid #e0e0e0;
  }
`;

export default DetailBaseStatsStyled;
