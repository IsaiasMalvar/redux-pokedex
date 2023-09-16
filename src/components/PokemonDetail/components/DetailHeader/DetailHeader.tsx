import { Link, useNavigate } from "react-router-dom";
import { PokeballIconBig } from "../../../Pokeball/Pokeball";
import { IPokemon } from "../../../../interfaces/interfaces";
import { Arrow } from "../../../Arrow/Arrow";
import DetailHeaderStyled from "./DetailHeaderStyled";

interface Props {
  pokemon: IPokemon;
}

const DetailHeader = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <DetailHeaderStyled className="pokedetail-header">
      <PokeballIconBig className="pokedetail-header--icon" />
      <div className="pokedetail-header__info-container">
        <Link
          to="javascript:void(0)"
          onClick={goBack}
          className="pokeball pokeball--return"
        >
          <Arrow />
        </Link>
        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </DetailHeaderStyled>
  );
};

export default DetailHeader;
