import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadButton = styled.button<{ isLoading?: boolean }>`
  border-radius: 8px;
  width: 151px;
  height: 36px;
  border: none;
  color: #1e88e5;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background-color: ${(props) => (props.isLoading ? "#ccc" : "#e3f2fd")};
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isLoading ? "#ccc" : "#b3e0ff")};
  }

  &.loading::after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #1E88E5;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
    margin-left: 8px;
    vertical-align: middle;
  }
`;
