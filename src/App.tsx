import React from 'react';
import SearchBar from './components/SearchBar';
import useMovieQuery from './hooks/useMovieQuery';

function App() {
  const { movies, loading, error, searchMovies, loadMoreMovies, hasMoreMovies, isFetchingMore } = useMovieQuery();
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <SearchBar onSearch={(searchPhrase: string) => searchMovies(searchPhrase)} />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {movies.map((movie) => 
          <span>{movie.title}</span>
        )}
        
        {hasMoreMovies && !loading && (
        <button onClick={loadMoreMovies} disabled={isFetchingMore}>
          Load More
        </button>
      )}
      </div>
    </div>
  );
}

export default App;
