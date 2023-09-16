import { IPokemon } from "../../interfaces/interfaces";
import { typesColor } from "../../utils/backgroundsByTypes";
import PokemonDetailStyled from "./PokemonDetailStyled";
import DetailBaseStats from "./components/DetailBaseStats/DetailBaseStats";
import DetailHeader from "./components/DetailHeader/DetailHeader";
import DetailPokeTypes from "./components/DetailPokeTypes/DetailPokeTypes";
import { DetailStats } from "./components/DetailStats/DetailStats";
import { Title } from "./components/Title/Title";

interface PokemonDetailProps {
  pokemon: IPokemon;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps): React.ReactElement => {
  const type = pokemon?.types[0]?.type?.name as string;
  const typeColor = typesColor[type];

  return (
    <PokemonDetailStyled $typeColor={typeColor}>
      <DetailHeader pokemon={pokemon} />
      <div className="info">
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <DetailPokeTypes pokemon={pokemon} />
        <Title content="About" typeColor={typeColor} />
        <DetailStats pokemon={pokemon} />
        <Title content="Base Stats" typeColor={typeColor} />
        <DetailBaseStats pokemon={pokemon} typesColor={typeColor} />
      </div>
    </PokemonDetailStyled>
  );
};

export default PokemonDetail;
