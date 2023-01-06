import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 550px;
  border: 1px solid var(--secondary-color);
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;