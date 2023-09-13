import { useEffect, useState } from "react";
import usePokemons from "../../hooks/usePokemons/usePokemons";

import PokemonCardStyled from "./PokemonCardStyled";
import { typesColor } from "../../utils/backgroundsByTypes";
import { IPokemon } from "../../interfaces/interfaces";

interface PokemonCardProps {
  url: string;
}

const PokemonCard = ({ url }: PokemonCardProps): React.ReactElement => {
  const { getPokemon } = usePokemons();

  const defaultPokemon: IPokemon = {
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
  };
  const [pokemon, setPokemon] = useState(defaultPokemon);

  useEffect(() => {
    (async () => {
      const newPokemon = await getPokemon(url);
      console.log(newPokemon);
      if (newPokemon) {
        setPokemon(newPokemon);
      }
    })();
  }, [getPokemon, url]);

  const type = pokemon?.types[0]?.type?.name as string;
  const typeColor = typesColor[type];
  console.log(pokemon);

  return (
    <PokemonCardStyled to="/" className="poke-card" $typeColor={typeColor}>
      <div className="poke-card__top-section">
        <span className="poke-card__id">#{pokemon?.id}</span>

        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
          className="poke-card__image"
        />
      </div>
      <div className="poke-card__name">{pokemon?.name}</div>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
