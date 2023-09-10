import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterStateStructure } from "../../interfaces/interfaces";
import { PokeType } from "../../interfaces/types";

const filtersState: FilterStateStructure = {
  filters: [
    {
      name: "All",
      url: "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0",
    },
  ],
};

const FiltersSlice = createSlice({
  name: "filters",
  initialState: filtersState,
  reducers: {
    setFilters: (
      currentState,
      action: PayloadAction<PokeType[]>,
    ): FilterStateStructure => ({
      ...currentState,
      filters: [...action.payload],
    }),
  },
});

export const { setFilters: setFiltersActionCreator } = FiltersSlice.actions;

export const filtersReducer = FiltersSlice.reducer;
