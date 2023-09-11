import { useEffect } from "react";
import usePokemons from "../../hooks/usePokemons/usePokemons";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import {
  loadPokemonActionCreator,
  loadPokemonsActionCreator,
} from "../../store/pokemons/pokemonsSlice";

import useFilters from "../../hooks/useFilters/useFilters";
import { setFiltersActionCreator } from "../../store/filters/filtersSlice";
import PokemonList from "../PokemonList/PokemonList";
import PokemonCard from "../PokemonCard/PokemonCard";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPokemons, getFilteredPokemons, getPokemon } = usePokemons();
  const { getFilters } = useFilters();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/10092/";

    (async () => {
      const { results } = await getPokemons();
      if (results) {
        dispatch(loadPokemonsActionCreator(results));
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

  return (
    <>
      <PokemonList />
      <PokemonCard url="https://pokeapi.co/api/v2/pokemon/10092/" />
      <Layout />
    </>
  );
};

export default App;
