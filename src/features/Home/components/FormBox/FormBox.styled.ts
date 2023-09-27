import styled from "styled-components";

export const StyledFormBox = styled.div`
  min-width: 20rem;
  position: absolute;
  left: 15%;
  font-weight: 400;
  text-align: left;
  border-radius: 20px;
  padding: 3rem;
  background-color: transparent;
  backdrop-filter: blur(32px);
  background-image: linear-gradient(
    130deg,
    rgba(135, 145, 135, 0.24),
    rgba(0, 0, 0, 0.24) 100%
  );
`;

export const StyledHeader= styled.div`
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 80%;
  height: 50px;
  border: none;
  color: white;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  background-color: #1e88e5;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    background-color: #1e88e5;
    filter: brightness(110%);
    color: white;
    cursor: pointer;
    transform: translateY(-3px);
  }

  &::after {
    content: "➜";
    position: absolute;
    right: 16px; 
    top: 50%;
    transform: translateY(-50%);
    color: white;
  }
`;