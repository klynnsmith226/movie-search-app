import React from 'react';
import styled from 'styled-components';
import useMovieDetails from '../hooks/useMovieDetails';
import { formatCurrency } from '../utils/formatCurrency';
import CastList from './CastList'

interface MovieModalProps {
    movieId: number | null;
    onClose: () => void;
}

const TrailerEmbed = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #222;
  padding: 2rem;
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  color: #ffffff;
  overflow-y: auto;
  max-height: 90vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  margin-right: 1rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0 0 0.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  color: #ccc;
  margin: 0.5rem 0;
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #ddd;
`;

const MovieModal: React.FC<MovieModalProps> = ({ movieId, onClose }) => {
    const { movie, cast, trailer, loading, error } = useMovieDetails(movieId);

    if (!movieId) return null;

    return (
        <ModalBackground onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {movie && (
                    <>
                        <DetailsContainer>
                            <Poster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} />
                            <div>
                                <Title>{movie.title}</Title>
                                {movie.tagline && (
                                    <Text>{movie.tagline}</Text>
                                )}
                                <Text>Release Date: {movie.release_date}</Text>
                                <Text>Runtime: {movie.runtime} mins</Text>
                                <Text>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</Text>
                            </div>

                        </DetailsContainer>
                        {trailer && (
                            <TrailerEmbed
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}

                        <Subtitle>Overview</Subtitle>
                        <Text>{movie.overview}</Text>
                        <Subtitle>Budget</Subtitle>
                        <Text>{formatCurrency(movie.budget)}</Text>
                        <Subtitle>Revenue</Subtitle>
                        <Text>{formatCurrency(movie.revenue)}</Text>
                        
                        {cast && <><Subtitle>Top Cast</Subtitle><CastList cast={cast}/></>}

                    </>
                )}
            </ModalContainer>
        </ModalBackground>
    );
};

export default MovieModal;
