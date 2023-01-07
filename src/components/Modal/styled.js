import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 20px;
  border-radius: 5px;
  min-height: 300px;
  min-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-size: 16px;
  cursor: pointer;
`;

export const ModalText = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  text-align: center;
`;