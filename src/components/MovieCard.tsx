import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import ImageWithEmptyPlaceholder from './ImageWithEmptyPlaceholder'

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
  justify-content:center;
  padding: 1rem;
  background-color: #222;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const MovieInfo = styled.div`
  padding: 2vh 2vw;
  flex: 1 1 250px;
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

function MovieCard({ title, releaseDate, description, posterPath, id, onClick }: MovieCardProps) {
    return (
        <CardContainer onClick={() => onClick(id)}>
            <ImageWithEmptyPlaceholder
                src={posterPath && `https://image.tmdb.org/t/p/w200${posterPath}`}
                alt={`${title} poster`}
                width={200}
                height={300}
                round={false}
                fallbackText="Movie Poster Not Available"
            />
            <MovieInfo>
                <MovieTitle>{title}</MovieTitle>
                <ReleaseYear>{dayjs(releaseDate).format("YYYY")}</ReleaseYear>
                <Description>{description}</Description>
            </MovieInfo>
        </CardContainer>
    );
};

export default MovieCard;
