import usePokemons from "../../hooks/usePokemons/usePokemons";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPokemonActionCreator } from "../../store/pokemons/pokemonsSlice";
import PokemonCardStyled from "./PokemonCardStyled";
import { useEffect } from "react";
import { typesColor } from "../../utils/backgroundsByTypes";

interface PokemonCardProps {
  url: string;
}

const PokemonCard = ({ url }: PokemonCardProps): React.ReactElement => {
  const { getPokemon } = usePokemons();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const pokemon = await getPokemon(url);
      console.log(pokemon);
      if (pokemon) {
        dispatch(loadPokemonActionCreator(pokemon));
      }
    })();
  }, [dispatch, getPokemon, url]);

  const { pokemon } = useAppSelector((state) => state.pokemonStore);
  const type = pokemon?.types[0]?.type?.name as string;
  const typeColor = typesColor[type];

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
