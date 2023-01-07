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

  &:nth-child(${(props) => props.actualBoardIndex + 1}) {
    ${({ actualBoardIndex, rowIndex, isToShowWrongAttemptAnimation }) => {
      if (actualBoardIndex === rowIndex && isToShowWrongAttemptAnimation) {
        return `
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
          `;
      }
    }}
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;
