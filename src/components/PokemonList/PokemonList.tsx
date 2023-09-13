import { useAppSelector } from "../../store";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListStyled from "./PokemonListStyled";

const PokemonList = (): React.ReactElement => {
  const { results } = useAppSelector((state) => state.pokemonStore);
  console.log(results);

  return (
    <PokemonListStyled>
      {results.map((pokemon) => (
        <li key={pokemon.url}>
          <PokemonCard url={pokemon.url} />
        </li>
      ))}
    </PokemonListStyled>
  );
};

export default PokemonList;
