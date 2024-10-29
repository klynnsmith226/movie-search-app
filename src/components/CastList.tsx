import React from 'react';
import styled from 'styled-components';
import ImageWithEmptyPlaceholder from './ImageWithEmptyPlaceholder';

interface ICastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

interface CastListProps {
    cast: ICastMember[];
}

const Text = styled.p`
    font-size: 0.9rem;
    line-height: 1;
    color: #ddd;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
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

const Container = styled.div`
    flex-direction: column;
    padding: 2vh 2vw;
    flex: 1 1 250px;
`

const Title = styled.h2`
  margin: 0 0 0.5rem;
`;

function CastList({ cast }: CastListProps) {
    return (
        <Container>
        <Title>Top Cast</Title>
        <CastContainer>
            {cast.map((member) => (
                <CastMember key={member.id}>
                    <ImageWithEmptyPlaceholder
                        src={member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : undefined}
                        alt={member.name}
                        width={100}
                        height={100}
                        round={true}
                        fallbackText="Cast Image Not Available"
                    />
                    <Text><b>{member.name}</b></Text><Text> as {member.character}</Text>
                </CastMember>
            ))}
        </CastContainer>
        </Container>
    );
};

export default CastList;
