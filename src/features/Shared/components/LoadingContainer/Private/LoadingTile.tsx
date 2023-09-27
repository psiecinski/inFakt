import styled, { keyframes } from 'styled-components';

const startColor = "#E3F2FD";
const endColor = "#DCEEFB";

export const shimmerAnimation = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const LoadingTile = styled.div`
  width: 300px;
  height: 376px;
  background: linear-gradient(90deg, ${startColor} 25%, ${endColor} 50%, ${startColor} 75%);
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: background 1s ease-in-out, opacity 1s ease-in-out;
  opacity: 0.7;
  animation: ${shimmerAnimation} 2s linear infinite; 
  border: 1px solid rgba(192, 192, 192, 0.5);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    background: linear-gradient(90deg, ${endColor} 25%, ${startColor} 50%, ${endColor} 75%);
  }
`;