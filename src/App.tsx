import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import useMovieQuery from './hooks/useMovieQuery';
import styled from 'styled-components';
import MovieModal from './components/MovieModal';

const AppContainer = styled.div`
  flex: 1;
  min-height: 100vw;
  background-color:#000000;
  padding: 2vw 2vh 2vw 2vh;
`;

function App() {
  const { movies, loading, error, searchMovies, loadMoreMovies, isFetchingMore, hasMoreMovies } = useMovieQuery();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const openModal = (id: number) => setSelectedMovieId(id);
  const closeModal = () => setSelectedMovieId(null);

  return (
    <AppContainer>
      <header className="App-header">
      </header>
      <div className="App">
        <SearchBar onSearch={searchMovies} />

        {loading && <p>Loading...</p>}

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
