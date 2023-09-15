import { useCallback } from "react";
import { IPokemon, IResult } from "../../interfaces/interfaces";
import axios from "axios";
import { PokemonsByTypeResult } from "../../interfaces/types";

const usePokemons = () => {
  const allPokemonsUrl =
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const getPokemons = useCallback(async (): Promise<{
    results: IResult[];
  }> => {
    try {
      const { data } = await axios.get<{ results: IResult[] }>(allPokemonsUrl);
      return {
        results: data.results,
      };
    } catch (error) {
      throw new Error();
    }
  }, []);

  const getFilteredPokemons = useCallback(async (url: string) => {
    if (url) {
      const { data } = await axios.get<{ pokemon: PokemonsByTypeResult[] }>(
        url as string,
      );
      const pokemons = data?.pokemon?.map(
        ({ pokemon }: PokemonsByTypeResult) => pokemon?.url,
      );

      return pokemons;
    }
  }, []);

  const getPokemon = useCallback(
    async (url?: string, id?: string): Promise<IPokemon> => {
      if (url) {
        const { data: pokemon } = await axios.get<IPokemon>(url);

        return pokemon;
      } else {
        const { data: pokemon } = await axios.get<IPokemon>(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
        );

        return pokemon;
      }
    },
    [],
  );

  return {
    getPokemons,
    getFilteredPokemons,
    getPokemon,
  };
};

export default usePokemons;
