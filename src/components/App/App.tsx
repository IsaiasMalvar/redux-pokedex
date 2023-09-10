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

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPokemons, getFilteredPokemons, getPokemon } = usePokemons();

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
  }, [dispatch, getFilteredPokemons, getPokemon, getPokemons]);

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
