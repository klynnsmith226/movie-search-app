import { useState } from 'react';
import {BASE_URL, API_KEY} from '../utils/constants';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

interface UseMovieQueryReturn {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  searchMovies: (query: string) => Promise<void>;
  loadMoreMovies: () => Promise<void>;
  isFetchingMore: boolean;
  hasMoreMovies: boolean;
}

const useMovieQuery = (): UseMovieQueryReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const searchMovies = async (newQuery: string) => {
    setLoading(true);
    setError(null);
    setQuery(newQuery);
    setPage(1);

    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(newQuery)}&page=1`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("Failed to fetch movies.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreMovies = async () => {
    // prevents loading beyond total pages
    if (!query || isFetchingMore || page >= totalPages) return;

    setIsFetchingMore(true);
    const nextPage = page + 1;

    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${nextPage}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPage(nextPage); 
    } catch (err) {
      setError("Failed to load more movies.");
      console.error(err);
    } finally {
      setIsFetchingMore(false);
    }
  };

  //used to conditionally hide "Load More" button to hide from user when useless
  const hasMoreMovies = page < totalPages;

  return { movies, loading, error, searchMovies, loadMoreMovies, isFetchingMore, hasMoreMovies };
};

export default useMovieQuery;
