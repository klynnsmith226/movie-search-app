import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

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
}

const MovieListContainer = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;

`;

function MovieList ({ movies, loadMoreMovies, hasMoreMovies, isFetchingMore }: MovieListProps) {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          description={movie.overview}
          posterPath={movie.poster_path}
        />
      ))}
    
      {hasMoreMovies && (
        <button onClick={loadMoreMovies} disabled={isFetchingMore}>
          Load More
        </button>
      )}
    </MovieListContainer>
  );
};

export default MovieList;
