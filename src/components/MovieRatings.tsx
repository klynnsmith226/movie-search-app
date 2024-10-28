import React from 'react';
import styled from 'styled-components';

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
  background-color: ${({ isHigh }) => (isHigh ? '#3cb371' : '#ff6347')};
`;

const PopularityBadge = styled(Badge)``;
const VoteAverageBadge = styled(Badge)``;

function MovieRatings({ popularity, rating }: MovieRatingsProps) {

    return (

        <RatingsContainer>
            {popularity !== null && (<PopularityBadge isHigh={popularity >= 50}>
                Popularity Score: {Math.round(popularity)}
            </PopularityBadge>)}
            {rating !== null && (<VoteAverageBadge isHigh={rating >= 5}>
                Rating: {Math.round(rating * 10)}%
            </VoteAverageBadge>)}
        </RatingsContainer>

    );
};

export default MovieRatings;
