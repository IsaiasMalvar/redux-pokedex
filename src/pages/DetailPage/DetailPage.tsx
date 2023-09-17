import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemons from "../../hooks/usePokemons/usePokemons";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPokemonActionCreator } from "../../store/pokemons/pokemonsSlice";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail";
import GoToTop from "../../utils/GoToTop";

const DetailPage = (): React.ReactElement => {
  const { getPokemon } = usePokemons();
  const { pokeId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const pokemon = await getPokemon("", pokeId);

      if (pokemon) {
        dispatch(loadPokemonActionCreator(pokemon));
      }
    })();
  }, [dispatch, getPokemon, pokeId]);

  const { pokemon } = useAppSelector((state) => state.pokemonStore);

  return (
    <>
      <GoToTop />
      <PokemonDetail pokemon={pokemon} />
    </>
  );
};

export default DetailPage;
