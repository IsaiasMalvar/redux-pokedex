import { styled } from "styled-components";

const FiltersStyled = styled.select<{ $typeColor: string }>`
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem 1rem;
  width: 200px;
  background: ${(props) =>
    props.$typeColor !== "" ? props.$typeColor : "#77424283"};
  color: #ffffff;
  box-shadow: none;
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
  font-size: 18px;
  position: relative;
`;

export default FiltersStyled;
