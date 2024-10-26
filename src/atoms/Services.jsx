// ServicesSection.jsx
import React from 'react';
import styled from 'styled-components';
import { FaTruck, FaCar, FaMotorcycle, FaUser } from 'react-icons/fa'; // Import icons

const SectionContainer = styled.div`
  padding: 40px 20px;
  background-color: #ffffff; /* White background for the section */
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #007bff; /* Primary color */
  margin-bottom: 20px;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap into new rows */
  justify-content: center; /* Center items horizontally */
  gap: 20px; /*
`;

const ServiceCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;
  background-color: #f9f9f9; /* Slightly off-white background for cards */

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
  }

  svg {
    font-size: 40px; /* Icon size */
    color: #007bff; /* Icon color */
    margin-bottom: 10px; /* Space below the icon */
  }

  h3 {
    font-size: 1.5rem; /* Service title size */
    margin: 10px 0; /* Space around title */
  }

  p {
    color: #555; /* Text color */
    margin: 0; /* Remove default margin */
  }

  /* Numbering style */
  span {
    font-weight: bold;
    color: #007bff; /* Color for the number */
    margin-right: 5px; /* Space between number and text */
  }
`;

const ServicesSection = () => {
  return (
    <SectionContainer>
      <Title>Our Services</Title>
      <ServicesGrid>
        <ServiceCard>
          <FaTruck />
          <h3><span>1.</span>Trucks</h3>
          <p>Heavy-duty trucks for large shipments.</p>
        </ServiceCard>
        <ServiceCard>
          <FaCar />
          <h3><span>2.</span>Cars</h3>
          <p>Reliable cars for fast deliveries.</p>
        </ServiceCard>
        <ServiceCard>
          <FaMotorcycle />
          <h3><span>3.</span>Bikes</h3>
          <p>Quick bike deliveries for urgent needs.</p>
        </ServiceCard>
        <ServiceCard>
          <FaUser />
          <h3><span>4.</span>Personnel</h3>
          <p>Experienced staff for seamless logistics.</p>
        </ServiceCard>
      </ServicesGrid>
    </SectionContainer>
  );
};

export default ServicesSection;