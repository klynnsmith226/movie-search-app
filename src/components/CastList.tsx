import React from 'react';
import styled from 'styled-components';
import ImageWithEmptyPlaceholder from './ImageWithEmptyPlaceholder';

interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

interface CastListProps {
    cast: CastMember[];
}

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #ddd;
`;

const CastContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const CastMember = styled.div`
  text-align: center;
  width: 100px;
`;

function CastList({ cast }: CastListProps) {
    return (
        <CastContainer>
            {cast.map((member) => (
                <CastMember key={member.id}>
                    <ImageWithEmptyPlaceholder
                        src={member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : undefined}
                        alt={member.name}
                        width={100}
                        height={100}
                        round={true}
                        fallbackText="Movie Poster Not Available"
                    />
                    <Text>{member.name} as {member.character}</Text>
                </CastMember>
            ))}
        </CastContainer>
    );
};

export default CastList;
