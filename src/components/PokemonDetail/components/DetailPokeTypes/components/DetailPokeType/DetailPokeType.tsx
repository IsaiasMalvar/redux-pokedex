import DetailPokeTypeStyled from "./DetailPokeTypeStyled";

const DetailPokeType = ({
  children,
  typeColor,
}: React.PropsWithChildren<{
  typeColor: string;
}>): React.ReactElement => {
  return (
    <DetailPokeTypeStyled $typeColor={typeColor}>
      {children}
    </DetailPokeTypeStyled>
  );
};

export default DetailPokeType;
