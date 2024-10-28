import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import useMovieQuery from './hooks/useMovieQuery';
import styled from 'styled-components';
import MovieModal from './components/MovieModal';
import LoadingIndicator from './components/LoadingIndicator';
import { SquareButton } from './components/SquareButton';


const AppContainer = styled.div`
  flex: 1;
  min-height: 100vw;
  background-color:#000000;
  padding: 2vw 2vh 2vw 2vh;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function App() {
  const { movies, loading, error, searchMovies, clearMovies, loadMoreMovies, isFetchingMore, hasMoreMovies } = useMovieQuery();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const openModal = (id: number) => setSelectedMovieId(id);
  const closeModal = () => setSelectedMovieId(null);

  return (
    <AppContainer>
      <header className="App-header">
      </header>
      <div className="App">
        <SearchBarContainer>
          <SearchBar onSearch={searchMovies} />
          <SquareButton disabled={movies.length === 0} onClick={clearMovies}>
            Clear Results
          </SquareButton>
        </SearchBarContainer>

        {loading && <LoadingIndicator color="#6bbda2" size={40} />}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <MovieList
          movies={movies}
          loadMoreMovies={loadMoreMovies}
          hasMoreMovies={hasMoreMovies}
          isFetchingMore={isFetchingMore}
          onMovieClick={openModal}
        />
      </div>
      {selectedMovieId && <MovieModal movieId={selectedMovieId} onClose={closeModal} />}

    </AppContainer>
  );
}

export default App;
