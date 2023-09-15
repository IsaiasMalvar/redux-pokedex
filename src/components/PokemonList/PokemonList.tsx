import { useAppSelector } from "../../store";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonListStyled from "./PokemonListStyled";

interface ListProps {
  page: number;
  perPage: number;
}

const PokemonList = ({ page, perPage }: ListProps): React.ReactElement => {
  const { results, pokemons, isFilter } = useAppSelector(
    (state) => state.pokemonStore,
  );
  console.log(results);

  return (
    <PokemonListStyled>
      {!isFilter
        ? results
            .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map((pokemon) => (
              <li key={pokemon.url}>
                <PokemonCard url={pokemon.url} />
              </li>
            ))
        : pokemons
            .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map((pokemon) => (
              <li key={pokemon}>
                <PokemonCard url={pokemon} />
              </li>
            ))}
    </PokemonListStyled>
  );
};

export default PokemonList;
