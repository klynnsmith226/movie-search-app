import React from 'react';
import styled from 'styled-components';

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

const CastImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  object-fit: cover;
`;

function CastList({cast}: CastListProps) {
    return (
        <CastContainer>
            {cast.map((member) => (
                <CastMember key={member.id}>
                    <CastImage
                        src={member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : 'https://via.placeholder.com/100x150'}
                        alt={member.name}
                    />
                    <Text>{member.name}</Text>
                    <Text>as {member.character}</Text>
                </CastMember>
            ))}
        </CastContainer>
    );
};

export default CastList;
