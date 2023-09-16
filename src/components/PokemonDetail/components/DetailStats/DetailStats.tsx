import { IPokemon } from "../../../../interfaces/interfaces";
import { HeightIcon, WeightIcon } from "../../../Stats/Stats";
import DetailStatsStyled from "./DetailStatsStyled";

interface Props {
  pokemon: IPokemon;
}

export const DetailStats = ({ pokemon }: Props) => {
  return (
    <DetailStatsStyled className="stats">
      <div className="stats__item">
        <WeightIcon />
        <span>{pokemon?.weight / 10 + "kg"} </span>
        <p>Weight</p>
      </div>
      <div className="stats__item">
        <HeightIcon />
        <span>{pokemon?.height / 10 + "m"} </span>
        <p>Height</p>
      </div>
    </DetailStatsStyled>
  );
};
