import { useState, useEffect } from 'react';
import {BASE_URL} from '../utils/constants';

interface Genre {
  id: number;
  name: string;
}

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface Trailer {
  id: string;
  key: string;       
  name: string;
  site: string;       
  type: string;       
}

interface MovieDetails {
  id: number;
  title: string;
  tagline: string;
  release_date: string;
  overview: string;
  runtime: number;
  genres: Genre[];
  poster_path: string;
  popularity: number;
  vote_average: number;
  budget: number;
  revenue: number;
}


const useMovieDetails = (movieId: number | null) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch movie details
        const movieResponse = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        if (!movieResponse.ok) throw new Error('Failed to fetch movie details');
        const movieData = await movieResponse.json();
        setMovie(movieData);

        // Fetch top 10 cast information
        const castResponse = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
        if (!castResponse.ok) throw new Error('Failed to fetch cast details');
        const castList = await castResponse.json();
        setCast(castList.cast.slice(0, 10));

        // Fetch videos and find the first trailer
        const trailerResponse = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
        if (!trailerResponse.ok) throw new Error('Failed to fetch trailer');
        const trailerData = await trailerResponse.json();
        const firstTrailer = trailerData.results.find((trailer: Trailer) => trailer.site === 'YouTube' && trailer.type === 'Trailer');
        setTrailer(firstTrailer || null);

      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId, API_KEY]);

  return { movie, cast, trailer, loading, error };
};

export default useMovieDetails;
