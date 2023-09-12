import OptionsStyled from "./FilterOptionStyled";

const FilterOption = ({
  children,
  value,
  typeColor,
}: React.PropsWithChildren<{
  value: string;
  typeColor: string;
}>): React.ReactElement => {
  return (
    <OptionsStyled value={value} $typeColor={typeColor}>
      {children}
    </OptionsStyled>
  );
};

export default FilterOption;
