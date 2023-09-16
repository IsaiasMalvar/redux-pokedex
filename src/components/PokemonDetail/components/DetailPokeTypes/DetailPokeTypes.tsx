import { IPokemon } from "../../../../interfaces/interfaces";
import { typesColor } from "../../../../utils/backgroundsByTypes";
import DetailPokeTypeStyled from "./DetailPokeTypeStyled";
import DetailPokeType from "./components/DetailPokeType/DetailPokeType";

interface Props {
  pokemon: IPokemon | null;
}

const DetailPokeTypes = ({ pokemon }: Props) => {
  return (
    <DetailPokeTypeStyled className="types">
      {pokemon?.types.map(({ type: { name } }) => (
        <DetailPokeType key={name} typeColor={typesColor[name]}>
          {name}
        </DetailPokeType>
      ))}
    </DetailPokeTypeStyled>
  );
};

export default DetailPokeTypes;
