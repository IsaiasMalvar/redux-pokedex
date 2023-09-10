import { useAppSelector } from "../../store";
import PokemonListStyled from "./PokemonListStyled";

const PokemonList = (): React.ReactElement => {
  const { pokemons, results, isFilter } = useAppSelector(
    (state) => state.pokemonStore,
  );

  console.log(pokemons);

  return (
    <PokemonListStyled>
      {isFilter
        ? pokemons.map((pokemon, index) => <li key={index}>{pokemon}</li>)
        : results.map(({ url }, index) => <li key={index}>{url}</li>)}
    </PokemonListStyled>
  );
};

export default PokemonList;
