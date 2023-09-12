import { useState } from "react";
import { useAppSelector } from "../../store";
import { typesColor } from "../../utils/backgroundsByTypes";
import FiltersStyled from "./FiltersStyled";
import FilterOption from "./components/FilterOption";

interface FilterProps {
  setFilter: (type: string) => void;
}

const Filters = ({ setFilter }: FilterProps): React.ReactElement => {
  const [color, setColor] = useState("");
  const { filters } = useAppSelector((state) => state.filterStore);

  const onChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.selectedOptions[0];
    setFilter(event?.target.value);
    const filterColor = selectedOption.text;
    setColor(typesColor[filterColor]);
    console.log(color);
  };

  return (
    <FiltersStyled onChange={onChangeType} $typeColor={color as string}>
      {filters.map((filter, index) => (
        <FilterOption
          key={index}
          value={filter.url as string}
          typeColor={typesColor[filter.name]}
        >
          {filter.name}
        </FilterOption>
      ))}
    </FiltersStyled>
  );
};

export default Filters;
