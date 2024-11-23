import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaExclamationTriangle, FaTruck, FaCalendar, FaEnvelope, FaCog } from 'react-icons/fa'; // Import specific icons

const KeyFeaturesSection = styled.div`
  padding: 40px 20px;
`;

const KeyFeaturesTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #e9f5ff; /* Light hover effect */
  }
`;

const FeatureIcon = styled.div`
  font-size: 24px;
  color: #0077b6;
  margin-right: 15px;
`;

const FeatureDescription = styled.span`
  color: #666;
  font-size: 16px;
`;

const AdvertSection = () => {
  const features = [
    {
      icon: <FaGlobe />,
      description: 'Wide service offering: Choose from 140+ services and 600 ports worldwide.',
    },
    {
      icon: <FaExclamationTriangle />,
      description: 'Dangerous Goods availability: Get a quotation for shipments with DG.',
    },
    {
      icon: <FaTruck />,
      description: 'Flexible transportation: Select port-to-port or door-to-door – or whatever combination you need.',
    },
    {
      icon: <FaCalendar />,
      description: 'Adjustable validity dates: Choose your validity date for more security down the road with our valid-from option.',
    },
    {
      icon: <FaEnvelope />,
      description: 'Email it to anyone: Send an email copy to yourself, colleagues, or customers.',
    },
    {
      icon: <FaCog />,
      description: 'Easy administration: Access all quotations via My Quotations.',
    },
  ];

  return (
    <KeyFeaturesSection>
      <KeyFeaturesTitle>Key Features</KeyFeaturesTitle>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesList>
    </KeyFeaturesSection>
  );
};

export default AdvertSection;