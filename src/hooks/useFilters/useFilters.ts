import axios from "axios";
import { useCallback } from "react";
import { PokeType } from "../../interfaces/types";
const useFilters = () => {
  const getFilters = useCallback(async () => {
    const filterTypesApiUrl = "https://pokeapi.co/api/v2/type";
    const { data } = await axios.get<{ results: PokeType[] }>(
      filterTypesApiUrl,
    );

    const { results: filters } = data;

    return filters;
  }, []);

  return { getFilters };
};

export default useFilters;
