import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../utils/formatCurrency';

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

const Subtitle = styled.h3`
  font-size: 1rem;
  color: #ccc;
  margin: 0.5rem 0;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

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
      <Subtitle>Release Date:</Subtitle>
      <Text>{releaseDate ? releaseDate : "-"}</Text>
      <Subtitle>Genres:</Subtitle>
      <Text>{genres ? genres.map((genre) => genre.name).join(', ') : "-"}</Text>
      <Subtitle>Runtime:</Subtitle>
      <Text>{runtime ? runtime : "-"} mins</Text>
      <Subtitle>Budget:</Subtitle>
      <Text>{budget ? formatCurrency(budget) : "-"}</Text>
      <Subtitle>Revenue:</Subtitle>
      <Text>{revenue ? formatCurrency(revenue) : "-"}</Text>
    </InfoTable>

  );
};

export default MovieDetailsTable;
