import { useEffect } from "react";
import usePokemons from "../../hooks/usePokemons/usePokemons";
import { useAppDispatch, useAppSelector } from "../../store";
import Layout from "../Layout/Layout";
import {
  loadFilteredPokemonsActionCreator,
  loadPokemonActionCreator,
  loadPokemonsActionCreator,
} from "../../store/pokemons/pokemonsSlice";
import { PokeType } from "../../interfaces/types";
import useFilters from "../../hooks/useFilters/useFilters";
import { setFiltersActionCreator } from "../../store/filters/filtersSlice";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPokemons, getFilteredPokemons, getPokemon } = usePokemons();
  const { getFilters } = useFilters();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/10092/";

    const typ: PokeType = {
      name: "normal",
      url: "https://pokeapi.co/api/v2/type/1/",
    };
    (async () => {
      const { results } = await getPokemons();
      if (results) {
        dispatch(loadPokemonsActionCreator(results));
      }
    })();
    (async () => {
      const { pokemons } = await getFilteredPokemons(typ);
      if (pokemons) {
        dispatch(loadFilteredPokemonsActionCreator(pokemons));
      }
    })();
    (async () => {
      const pokemon = await getPokemon(url);
      console.log(pokemon);
      if (pokemon) {
        dispatch(loadPokemonActionCreator(pokemon));
      }
    })();

    (async () => {
      const filters = await getFilters();
      console.log(filters);
      if (filters) {
        dispatch(setFiltersActionCreator(filters));
      }
    })();
  }, [dispatch, getFilteredPokemons, getFilters, getPokemon, getPokemons]);

  const { results, pokemons, pokemon } = useAppSelector(
    (state) => state.pokemonStore,
  );

  console.log(pokemons);

  return (
    <>
      {results.map((result, index) => (
        <h1 key={index}>{result.name}</h1>
      ))}
      {pokemons.map((pokemon, index) => (
        <h2 key={index}>{pokemon}</h2>
      ))}

      <h3>{pokemon.name}</h3>
      <Layout />
    </>
  );
};

export default App;
