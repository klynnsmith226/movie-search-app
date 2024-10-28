import styled from 'styled-components';

export const SquareButton = styled.button<{ disabled: boolean }>`
  font-size: 1rem;
  padding: 1.25rem 1rem;
  border: none;
  border-radius: 15px;
   font-weight: bold;
  background-color: ${({ disabled }) => (disabled ? '#444' : '#6bbda2')};
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#488a74')};
  }
`;


