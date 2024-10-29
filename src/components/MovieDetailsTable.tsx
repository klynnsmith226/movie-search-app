import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../utils/formatCurrency';
import TableRow from './TableRow';

interface Genre {
  id: number;
  name: string;
}

interface MovieDetailsTableProps {
  releaseDate: string;
  runtime: number;
  genres: Genre[];
  budget: number;
  revenue: number;
}

const InfoTable = styled.div`
  padding-left:2vw;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1rem;
  align-items: center;
  margin-top: 1rem;
  background-color: #333;
  border-radius: 8px;
  width: fit-content;
  padding-left: 2rem;
  padding-right: 2rem;
`;


function MovieDetailsTable({ releaseDate, genres, runtime, budget, revenue }: MovieDetailsTableProps) {
  return (
    <InfoTable>
      <TableRow title="Release Date" value={releaseDate}/>
      <TableRow title="Genres" value={genres.map((genre) => genre.name).join(', ')}/>
      <TableRow title="Runtime" value={`${runtime} min`}/>
      <TableRow title="Budget" value={formatCurrency(budget)}/>
      <TableRow title="Revenue" value={formatCurrency(revenue)}/>
    </InfoTable>

  );
};

export default MovieDetailsTable;
