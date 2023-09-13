import { useEffect } from "react";
import usePokemons from "../../hooks/usePokemons/usePokemons";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import { loadPokemonsActionCreator } from "../../store/pokemons/pokemonsSlice";

import useFilters from "../../hooks/useFilters/useFilters";
import { setFiltersActionCreator } from "../../store/filters/filtersSlice";
import PokemonList from "../PokemonList/PokemonList";

import Filters from "../Filters/Filters";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPokemons, getFilteredPokemons } = usePokemons();
  const { getFilters } = useFilters();

  useEffect(() => {
    (async () => {
      const { results } = await getPokemons();
      console.log(results);
      if (results) {
        dispatch(loadPokemonsActionCreator(results));
      }
    })();

    (async () => {
      const filters = await getFilters();

      if (filters) {
        dispatch(setFiltersActionCreator(filters));
      }
    })();
  }, [dispatch, getFilteredPokemons, getFilters, getPokemons]);

  const setFilter = () => {};

  return (
    <>
      <Filters setFilter={setFilter} />
      <PokemonList />
      <Layout />
    </>
  );
};

export default App;
