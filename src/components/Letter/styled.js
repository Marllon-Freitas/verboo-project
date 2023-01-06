import styled from "styled-components";

export const LetterWrapper = styled.div`
  flex: 33%;
  height: 100%;
  border: 1px solid grey;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: var(--primary-color);

  background-color: ${(props) => {
    switch (props.id) {
      case "correct":
        return "var(--correct-color)";
      case "almost":
        return "var(--almost-color)";
      case "error":
        return "var(--error-color)";
      default:
        return "var(--secondary-color)";
    }
  }};

  animation: ${(props) => {
      switch (props.id) {
        case "correct":
          return "0.75s ease-in-out 0s 1 normal none flip";
        case "almost":
          return "0.75s ease-in-out 0s 1 normal none flip";
        case "error":
          return "0.75s ease-in-out 0s 1 normal none flip";
        default:
          return "none";
      }
    }};
  animation-delay: ${(props) => props.animationDelay}s;

  @keyframes flip {
    0% {
      transform: rotateY(0deg);
    }
    45% {
      transform: rotateY(90deg);
    }
    55% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;
