import React from 'react';
import styled from 'styled-components';

interface ImageWithEmptyPlaceholderProps {
    src?: string;
    alt: string; 
    width?: number;   
    height?: number;    
    round?: boolean; 
    fallbackText?: string;
  }
  

const ImageContainer = styled.div<{ width: number, height: number, round: boolean }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${({ round }) => (round ? '50%' : '8px')};
  overflow: hidden;  
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EmptyImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  object-fit: cover;
`;

const ImageWithEmptyPlaceholder = ({ 
  src, 
  alt, 
  width = 200, 
  height = 300, 
  round = false, 
  fallbackText = "Image Not Available" 
}:ImageWithEmptyPlaceholderProps) => {
  return (
    <ImageContainer width={width} height={height} round={round}>
      {src ? (
        <StyledImage src={src} alt={alt} />
      ) : (
        <EmptyImage>{fallbackText}</EmptyImage>
      )}
    </ImageContainer>
  );
};

export default ImageWithEmptyPlaceholder;
