import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #f5f5f5;
    --secondary-color: #232323;
    --correct-color: #528d4e;
    --almost-color: #b49f39;
    --error-color: #3a393c;
    --primary-font: 'Poppins', sans-serif;
  }
  
  .App {
  text-align: center;
  background-color: var(--secondary-color);
  width: 100vw;
  height: 100vh;
  color: var(--primary-color);
  font-family: var(--primary-font);
  }

  body {
    padding: 0%;
    margin: 0;
  }

  nav {
    height: 60px;
    width: 100%;
    margin: 0;
    border-bottom: 1px solid grey;
    display: grid;
    place-items: center;
  }

  nav h1 {
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    color: white;
    font-size: 45px;
  }
  .game {
    width: 100vw;
    height: calc(100vh - 170px);
    display: flex;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
  }

  .row {
    flex: 33%;
    display: flex;
    flex-direction: row;
    margin: 5px;
  }

  .keyboard {
    width: 700px;
    height: 300px;
    margin-top: 60px;
  }

  .line1 {
    flex: 33%;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  .line2 {
    flex: 33%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
  }
  .line3 {
    flex: 33%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
  }

  .key {
    width: 50px;
    height: 70px;
    margin: 5px;
    border-radius: 4px;
    display: grid;
    place-items: center;
    font-size: 20px;
    background-color: grey;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }
`;
