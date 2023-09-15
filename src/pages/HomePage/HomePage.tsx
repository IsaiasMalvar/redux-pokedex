import { useEffect, useState } from "react";
import usePokemons from "../../hooks/usePokemons/usePokemons";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadFilteredPokemonsActionCreator,
  loadPokemonsActionCreator,
} from "../../store/pokemons/pokemonsSlice";

import useFilters from "../../hooks/useFilters/useFilters";
import { setFiltersActionCreator } from "../../store/filters/filtersSlice";
import Filters from "../../components/Filters/Filters";
import PokemonList from "../../components/PokemonList/PokemonList";
import { usePagination } from "../../hooks/usePagination/usePagination";
import { Pagination } from "../../components/Pagination/Pagination";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPokemons, getFilteredPokemons } = usePokemons();
  const { page, nextPage, previousPage, backTo1Filter } = usePagination();
  const { getFilters } = useFilters();
  const [filter, setFilter] = useState("");

  const perPage = 12;

  useEffect(() => {
    (async () => {
      const { results } = await getPokemons();

      if (results) {
        dispatch(loadPokemonsActionCreator(results));
      }
    })();
    if (filter) {
      (async () => {
        const pokemons = await getFilteredPokemons(filter);

        if (pokemons) {
          dispatch(loadFilteredPokemonsActionCreator(pokemons));
        }
      })();
    }

    (async () => {
      const filters = await getFilters();

      if (filters) {
        dispatch(setFiltersActionCreator(filters));
      }
    })();
  }, [dispatch, filter, getFilteredPokemons, getFilters, getPokemons]);

  const { results, pokemons, isFilter } = useAppSelector(
    (state) => state.pokemonStore,
  );

  console.log(isFilter);
  console.log(page);

  return (
    <>
      <Filters setFilter={setFilter} setRestart={backTo1Filter} />
      <PokemonList page={page} perPage={perPage} />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={!isFilter ? results.length : pokemons.length}
      />
    </>
  );
};

export default HomePage;
