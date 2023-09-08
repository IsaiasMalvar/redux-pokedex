import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IResult, PokemonStateStructure } from "../../interfaces/interfaces";

const pokemonsState: PokemonStateStructure = {
  results: [],
};

const PokemosSlice = createSlice({
  name: "pokemons",
  initialState: pokemonsState,
  reducers: {
    loadPokemons: (
      currentState,
      action: PayloadAction<{
        results: IResult[];
      }>,
    ): PokemonStateStructure => ({
      ...currentState,
      results: [...action.payload.results],
    }),
  },
});

export const { loadPokemons: loadPokemonsActionCreator } = PokemosSlice.actions;

export const pokemonReducer = PokemosSlice.reducer;
