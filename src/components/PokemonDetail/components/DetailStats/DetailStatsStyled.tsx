import { styled } from "styled-components";

const DetailStatsStyled = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .stats {
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    svg {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }

    p {
      color: #666666;
      font-size: 14px;
    }
  }
`;

export default DetailStatsStyled;
