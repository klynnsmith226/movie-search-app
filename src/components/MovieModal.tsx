import React from 'react';
import styled from 'styled-components';
import useMovieDetails from '../hooks/useMovieDetails';
import CastList from './CastList'
import MovieRatings from './MovieRatings'
import LoadingIndicator from './LoadingIndicator';
import ImageWithEmptyPlaceholder from './ImageWithEmptyPlaceholder';
import MovieDetailsTable from './MovieDetailsTable';

interface MovieModalProps {
    movieId: number | null;
    onClose: () => void;
}

const TrailerEmbed = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #222;
  padding: 2rem;
  width: 90%;
  max-width: 1200px;
  border-radius: 8px;
  color: #ffffff;
  overflow-y: auto;
  max-height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  color: #fff;
  font-size: 2.5rem;
  border: none;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  flex-wrap:wrap;
`;

const Title = styled.h2`
  margin: 0 0 0.5rem;
`;

const Tagline = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  font-style: italic;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const MovieDescription = styled.div`
    flex: 1 1 250px;
`

function MovieModal({ movieId, onClose }: MovieModalProps) {
    const { movie, cast, trailer, loading, error } = useMovieDetails(movieId);

    if (!movieId) return null;

    return (
        <ModalBackground onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {loading && <LoadingIndicator color="#6bbda2" size={40} />}
                {error && <p>{error}</p>}
                {movie && (
                    <>
                        <DetailsContainer>
                            <ImageWithEmptyPlaceholder
                                src={movie.poster_path && `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={`${movie.title} poster`}
                                width={200}
                                height={300}
                                round={false}
                                fallbackText="Movie Poster Not Available"
                            />
                            <MovieDescription>
                                <Title>{movie.title}</Title>
                                {movie.tagline && (
                                    <Tagline>{movie.tagline}</Tagline>
                                )}
                                <Text>{movie.overview}</Text>
                                {(movie.popularity !== null || movie.vote_average !== null) && <MovieRatings popularity={movie.popularity} rating={movie.vote_average} />}

                            </MovieDescription>
                        </DetailsContainer>
                        {trailer && (
                            <TrailerEmbed
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                        <DetailsContainer>
                            <MovieDetailsTable releaseDate={movie.release_date} runtime={movie.runtime} genres={movie.genres} revenue={movie.revenue} budget={movie.budget} />
                            {cast && <CastList cast={cast} />}
                        </DetailsContainer>

                    </>
                )}
            </ModalContainer>
        </ModalBackground>
    );
};

export default MovieModal;
