import { IPokemon } from "../../../../interfaces/interfaces";
import DetailBaseStatsStyled from "./DetailBaseStatsStyled";

interface Props {
  pokemon: IPokemon;
  typesColor: string;
}

const DetailBaseStats = ({ pokemon, typesColor }: Props) => {
  const maxStat = 255;

  const baseStatsNames: { [key: string]: string } = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };

  return (
    <DetailBaseStatsStyled className="base-stats" $typesColor={typesColor}>
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => (
        <div key={name} className="base-stats__item">
          <span>{baseStatsNames[name]}</span>
          <div className="base-stats__right">
            <p>0{base_stat}</p>
            <div className="base-stats__line">
              <div className="base-stats__background" />
              <div
                className="base-stats__second-line"
                style={{
                  background: typesColor,
                  opacity: "1",
                  width: `${(base_stat / maxStat) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </DetailBaseStatsStyled>
  );
};

export default DetailBaseStats;
