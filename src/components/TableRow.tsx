import React from 'react';
import styled from 'styled-components';

interface TableRowProps {
    title: string;
    value?: string | number | null;
  }

  const Subtitle = styled.h3`
  font-size: 1rem;
  color: #ccc;
  margin: 0.5rem 0;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;
  
const TableRow = ({ title, value } : TableRowProps) => {
    return (
      <>
        <Subtitle>{title}:</Subtitle>
        <Text>{value ? value : "-"}</Text>
      </>
    );
  };

export default TableRow;