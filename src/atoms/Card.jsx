// LogisticsCard.jsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ImageSection = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin: 15px;
  text-align: center;
`;

const PromoText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0 15px 15px;
  text-align: center;
`;

const Card = ({ heading, image, promoText }) => {
  return (
    <CardContainer>
      <ImageSection image={image} />
      <Heading>{heading}</Heading>
      <PromoText>{promoText}</PromoText>
    </CardContainer>
  );
};

export default Card;