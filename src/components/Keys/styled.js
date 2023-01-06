import styled from "styled-components";

export const KeyWrapper = styled.div`
  width: 50px;
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: grey;
  color: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;

  ${(props) => props.isBigKey && "width: 100px;"}
  ${(props) => props.isDisabled && "background-color: #3a393c;"}
`;
