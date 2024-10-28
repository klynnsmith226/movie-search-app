import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

interface MovieRatingsProps {
    popularity: number | null;
    rating: number | null;
}

const RatingsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
`;

const Badge = styled.div<{ isHigh: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  gap:0.5rem;
  background-color: ${({ isHigh }) => (isHigh ? '#3cb371' : '#ff6347')};
`;

const PopularityBadge = styled(Badge)``;
const VoteAverageBadge = styled(Badge)``;

function MovieRatings({ popularity, rating }: MovieRatingsProps) {
    const highPopularity = (popularity && popularity >= 50) ? true : false;
    const highRating = (rating && rating >= 5) ? true : false;

    return (

        <RatingsContainer>
            {popularity !== null && (<PopularityBadge isHigh={highPopularity}>
                <FontAwesomeIcon size="lg" icon={highPopularity ? faThumbsUp: faThumbsDown } color="#fff" /> Popularity Score: {Math.round(popularity)}
            </PopularityBadge>)}
            {rating !== null && (<VoteAverageBadge isHigh={highRating}>
                <FontAwesomeIcon size="lg" icon={highRating ? faThumbsUp: faThumbsDown } color="#fff" /> Rating: {Math.round(rating * 10)}%
            </VoteAverageBadge>)}
        </RatingsContainer>

    );
};

export default MovieRatings;
