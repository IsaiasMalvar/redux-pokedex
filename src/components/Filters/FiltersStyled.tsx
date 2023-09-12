import { styled } from "styled-components";

const FiltersStyled = styled.select<{ $typeColor: string }>`
  margin-top: 20px;
  padding: 2rem 2rem;
  width: 200px;
  background: ${(props) =>
    props.$typeColor !== "" ? props.$typeColor : "#41343483"};
  color: #ffffff;
  box-shadow: none;
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
  font-size: 18px;
`;

export default FiltersStyled;
