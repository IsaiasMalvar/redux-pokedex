import { PokeballIconSmall } from "../Pokeball/Pokeball";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <div className="header__container">
        <PokeballIconSmall />
        <span className="header__text">Pokemon</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
