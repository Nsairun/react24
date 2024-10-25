// LogisticsSection.js
import React from 'react';
import styled from 'styled-components';
import logisticsImage from '../images/logistics.jpeg'; // Replace with the actual image path

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #f8f9fa; /* Light background color */
  padding: 50px;
  border-radius: 10px;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center; /* Center align text */
`;

const Image = styled.div`
  background-image: url(${logisticsImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px; /* Adjust height as needed */
  opacity: 0.7; /* Make the image transparent */
  border-radius: 10px;
`;

const PromotionalText = styled.p`
  margin-top: 20px;
  font-size: 1rem; /* Base font size */
  color: #444; /* Slightly lighter dark color for better readability */
  max-width: 600px; /* Limit width for better readability */
  line-height: 1.6; /* Increased line height for better readability */
  font-family: 'Arial', sans-serif; /* Clean and modern font */
  text-align: center; /* Center align text for a more polished look */
  letter-spacing: 0.5px; /* Slightly increase letter spacing */
  padding: 0 15px; /* Add horizontal padding for responsiveness */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-radius: 5px; /* Rounded corners */
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent background for contrast */
`;

const LandingImageSection = () => {
  return (
    <SectionContainer>
      <Image />
      <PromotionalText>
        Experience seamless logistics solutions with our expert team. We ensure timely delivery, efficient supply chain management, and unparalleled customer service. Partner with us for a smoother journey in logistics!
      </PromotionalText>
    </SectionContainer>
  );
};

export default LandingImageSection;