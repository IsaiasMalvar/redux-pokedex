import { PokeTypes } from "../utils/backgroundsByTypes";

export type PokeType = {
  name: PokeTypes | "all";
  url?: string;
};

export type AllPokemonsResult = {
  name: string;
  url: string;
};

export type PokemonsByTypeResult = {
  pokemon: {
    name: string;
    url: string;
  };
};
