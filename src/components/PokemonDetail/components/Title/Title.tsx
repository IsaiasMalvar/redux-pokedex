import TitleStyled from "./TitleStyled";

interface Props {
  content: string;
  typeColor: string;
}

export const Title = ({ content, typeColor }: Props) => {
  return <TitleStyled $typeColor={typeColor}>{content}</TitleStyled>;
};
