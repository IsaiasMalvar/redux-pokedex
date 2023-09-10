import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IPokemon,
  IResult,
  PokemonStateStructure,
} from "../../interfaces/interfaces";

const pokemonsState: PokemonStateStructure = {
  isFilter: false,
  results: [],
  pokemons: [],
  pokemon: {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_types: [],
    species: {
      name: "",
      url: "",
    },
    sprites: {
      back_default: "",
      back_female: "",
      back_shiny: "",
      back_shiny_female: "",
      front_default: "",
      front_female: "",
      front_shiny: "",
      front_shiny_female: "",
      other: {
        dream_world: {
          front_default: "",
          front_female: "",
        },
        home: {
          front_default: "",
          front_female: "",
          front_shiny: "",
          front_shiny_female: "",
        },
        "official-artwork": {
          front_default: "",
        },
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default: "",
            back_gray: "",
            back_transparent: "",
            front_default: "",
            front_gray: "",
            front_transparent: "",
          },
          yellow: {
            back_default: "",
            back_gray: "",
            back_transparent: "",
            front_default: "",
            front_gray: "",
            front_transparent: "",
          },
        },
        "generation-ii": {
          crystal: {
            back_default: "",
            back_shiny: "",
            back_shiny_transparent: "",
            back_transparent: "",
            front_default: "",
            front_shiny: "",
            front_shiny_transparent: "",
            front_transparent: "",
          },
          gold: {
            back_default: "",
            back_shiny: "",
            front_default: "",
            front_shiny: "",
            front_transparent: "",
          },
          silver: {
            back_default: "",
            back_shiny: "",
            front_default: "",
            front_shiny: "",
            front_transparent: "",
          },
        },
        "generation-iii": {
          emerald: {
            front_default: "",
            front_shiny: "",
          },
          "firered-leafgreen": {
            back_default: "",
            back_shiny: "",
            front_default: "",
            front_shiny: "",
          },
          "ruby-sapphire": {
            back_default: "",
            back_shiny: "",
            front_default: "",
            front_shiny: "",
          },
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default: "",
            back_female: "",
            back_shiny: "",
            back_shiny_female: "",
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
          "heartgold-soulsilver": {
            back_default: "",
            back_female: "",
            back_shiny: "",
            back_shiny_female: "",
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
          platinum: {
            back_default: "",
            back_female: "",
            back_shiny: "",
            back_shiny_female: "",
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default: "",
              back_female: "",
              back_shiny: "",
              back_shiny_female: "",
              front_default: "",
              front_female: "",
              front_shiny: "",
              front_shiny_female: "",
            },
            back_default: "",
            back_female: "",
            back_shiny: "",
            back_shiny_female: "",
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
          "x-y": {
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
        },
        "generation-vii": {
          icons: {
            front_default: "",
            front_female: "",
          },
          "ultra-sun-ultra-moon": {
            front_default: "",
            front_female: "",
            front_shiny: "",
            front_shiny_female: "",
          },
        },
        "generation-viii": {
          icons: {
            front_default: "",
            front_female: "",
          },
        },
      },
    },
    stats: [],
    types: [],
    weight: 0,
  },
};

const PokemosSlice = createSlice({
  name: "pokemons",
  initialState: pokemonsState,
  reducers: {
    loadAllPokemons: (
      currentState,
      action: PayloadAction<IResult[]>,
    ): PokemonStateStructure => ({
      ...currentState,
      isFilter: false,
      results: [...action.payload],
    }),
    loadFilteredPokemons: (
      currentState,
      action: PayloadAction<string[]>,
    ): PokemonStateStructure => ({
      ...currentState,
      pokemons: [...action.payload],
      isFilter: true,
    }),
    loadPokemon: (
      currentState,
      action: PayloadAction<IPokemon>,
    ): PokemonStateStructure => ({
      ...currentState,
      pokemon: { ...action.payload },
    }),
  },
});

export const {
  loadAllPokemons: loadPokemonsActionCreator,
  loadFilteredPokemons: loadFilteredPokemonsActionCreator,
  loadPokemon: loadPokemonActionCreator,
} = PokemosSlice.actions;

export const pokemonReducer = PokemosSlice.reducer;
