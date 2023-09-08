import { useCallback } from "react";
import { IResult } from "../../interfaces/interfaces";
import axios from "axios";

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

  return {
    getPokemons,
  };
};

export default usePokemons;
