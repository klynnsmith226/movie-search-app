import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 4px solid ${({ color }) => color};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
`;
const SpinnerContainer = styled.div`
  display:flex;
  justify-content:center;
  padding: 5vh 5vw;

`;

const LoadingIndicator = ({ size = 40, color = '#333' }) => {
  return <SpinnerContainer><Spinner size={size} color={color} /></SpinnerContainer>;
};

export default LoadingIndicator;
