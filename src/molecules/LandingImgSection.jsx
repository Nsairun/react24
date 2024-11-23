// LogisticsSection.js
import React from 'react';
import styled from 'styled-components';
import logisticsImage from '../images/logistics.jpeg';
import WriteUp from '../atoms/WriteUp';
import Card from '../atoms/Card'
import Services from '../atoms/Services';
import AdvertSection from '../atoms/AdvertSection'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 20px;
  background-color:
  border-radius: 8px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
`;

const Image = styled.div`
  background-image: url(${logisticsImage});
  background-size: cover;
  background-position: center;
  width: 40vw;
  height: 300px;
  opacity: 0.7;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #007bff; /* Primary color */
  margin-bottom: 20px;
`;


const PromotionalText = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: #444;
  max-width: 600px;
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 0 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const LandingImageSection = () => {
  return (
    <SectionContainer>
    <MainContainer>
    <SectionContainer>
      <Image />
      <PromotionalText>
        Experience seamless logistics solutions with our expert team. We ensure timely delivery, efficient supply chain management, and unparalleled customer service. Partner with us for a smoother journey in logistics!
      </PromotionalText>
    </SectionContainer>
    <WriteUp />
    </MainContainer>
    <Title >Card Section</Title>
    <MainContainer>
    <Card 
        heading="Fast & Reliable Delivery" 
        image="https://example.com/your-image1.jpg" 
        promoText="We ensure your packages are delivered on time, every time!"
      />
      <Card 
        heading="Global Reach" 
        image="https://example.com/your-image2.jpg"
        promoText="Connecting businesses worldwide with seamless logistics solutions."
      />
      <Card 
        heading="24/7 Customer Support" 
        image="https://example.com/your-image3.jpg"
        promoText="Our dedicated team is here to assist you around the clock!"
      />
    </MainContainer>
      <Services />
      <AdvertSection />
    </SectionContainer>
  );
};

export default LandingImageSection;