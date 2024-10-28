import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import useMovieQuery from './hooks/useMovieQuery';
import styled from 'styled-components';
import MovieModal from './components/MovieModal';
import LoadingIndicator from './components/LoadingIndicator';
import { SquareButton } from './components/SquareButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import ErrorMessage from './components/ErrorMessage';

const AppContainer = styled.div`
  flex: 1;
  min-height: 100vw;
  background-color:#000000;
  padding: 1vh 2vw;
`;

const Body = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  min-height: 100vh;
`

const HeaderText = styled.p`
  color: #6bbda2;
  font-weight: bold;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: calc(10px + 2vmin);
  color: white;
  border-bottom: 1px #666 solid;
}
`

const SearchBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top:2vh;
  gap: 1rem;
`;

function App() {
  const { movies, loading, error, searchMovies, clearMovies, loadMoreMovies, isFetchingMore, hasMoreMovies } = useMovieQuery();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const openModal = (id: number) => setSelectedMovieId(id);
  const closeModal = () => setSelectedMovieId(null);

  return (
    <AppContainer>
      <Header>
        <FontAwesomeIcon size="lg" icon={faFilm} color="#6bbda2" />
        <HeaderText>FilmSearch</HeaderText>
      </Header>
      <Body>
        <SearchBarContainer>
          <SearchBar onSearch={searchMovies} />
          <SquareButton disabled={movies.length === 0} onClick={clearMovies}>
            Clear Results
          </SquareButton>
        </SearchBarContainer>

        {loading && <LoadingIndicator color="#6bbda2" size={40} />}

        {error && <ErrorMessage message={error} />}

        <MovieList
          movies={movies}
          loadMoreMovies={loadMoreMovies}
          hasMoreMovies={hasMoreMovies}
          isFetchingMore={isFetchingMore}
          onMovieClick={openModal}
        />
      </Body>
      {selectedMovieId && <MovieModal movieId={selectedMovieId} onClose={closeModal} />}

    </AppContainer>
  );
}

export default App;
