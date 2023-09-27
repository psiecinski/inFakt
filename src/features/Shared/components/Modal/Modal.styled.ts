import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  border-radius: 8px;
  display: block;
  height: 35px;
  margin-top: 1rem;
  border: none;
  width: 100%;
  color: white;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  background-color: #9c0c30;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    background-color: #c7184f;
    filter: brightness(110%);
    color: white;
    cursor: pointer;
    transform: translateY(-3px);
  }
`;