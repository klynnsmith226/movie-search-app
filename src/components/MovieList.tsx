import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';
import {SquareButton} from './SquareButton';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

interface MovieListProps {
    movies: Movie[];
    loadMoreMovies: () => void;
    hasMoreMovies: boolean;
    isFetchingMore: boolean;
    onMovieClick: (id: number) => void;
}

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 2vh;
  justify-content:center;
`;

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;


function MovieList({ movies, loadMoreMovies, hasMoreMovies, isFetchingMore, onMovieClick }: MovieListProps) {
    return (
        <MovieListContainer>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    description={movie.overview}
                    posterPath={movie.poster_path}
                    id={movie.id}
                    onClick={onMovieClick}
                />
            ))}
            <LoadMoreContainer>
            {isFetchingMore ? <LoadingIndicator color="#6bbda2" size={20}/> :
                hasMoreMovies && (
                    <SquareButton onClick={loadMoreMovies} disabled={isFetchingMore}> Load More </SquareButton>
                   
                )}
                </LoadMoreContainer>
               
        </MovieListContainer>
    );
};

export default MovieList;
