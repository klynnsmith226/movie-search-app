import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
}

const ErrorContainer = styled.div`
  align-self:center;
  background-color: #ff4d4f;
  color: #ffffff;      
  border-radius: 8px;    
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0;
  max-width: 600px;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorMessage;
