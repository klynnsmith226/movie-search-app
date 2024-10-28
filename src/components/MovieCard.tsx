import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

interface MovieCardProps {
  title: string;
  releaseDate: string;
  description: string;
  posterPath: string;
  id: number;
  onClick: (id: number) => void;
}

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background-color: #222;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  margin: 1rem 0;
`;

const Poster = styled.img`
  flex:1
  border-radius: 4px;
  object-fit: cover;
  margin-right: 1rem;
`;

const MovieInfo = styled.div`
  flex: 3;
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #ffffff;
`;

const ReleaseYear = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #cccccc;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #dddddd;
  line-height: 1.4;
`;

function MovieCard ({ title, releaseDate, description, posterPath, id, onClick }: MovieCardProps ) {
  return (
    <CardContainer onClick={() => onClick(id)}>
      <Poster src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={`${title} poster`} />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <ReleaseYear>{dayjs(releaseDate).format("YYYY")}</ReleaseYear>
        <Description>{description}</Description>
      </MovieInfo>
    </CardContainer>
  );
};

export default MovieCard;
