// PromotionalStatement.jsx
import React from 'react';
import styled from 'styled-components';
import { FaComments } from 'react-icons/fa';

const PromoContainer = styled.div`
  background: linear-gradient(135deg, #007bff, #00c6ff); /* Gradient background */
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 600px; /* Limit width */
  margin: 20px auto; /* Center horizontally */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
`;

const PromoText = styled.h2`
  margin: 0 0 10px; /* Margin for spacing */
  font-size: 1.8rem; /* Font size for promotional statement */
`;

const PromoButton = styled.button`
  display: flex;
  align-items: center; /* Center items vertically */
  background-color: #fff; /* White background for button */
  color: #007bff; /* Text color */
  border: none;
  border-radius: 5px;
  padding: 10px 15px; /* Padding for button */
  font-size: 1rem; /* Font size */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Transition effects */

  &:hover {
    background-color: #e7f1ff; /* Light blue on hover */
  }

  &:focus {
    outline: none; /* Remove outline */
  }

  svg {
    margin-right: 5px; /* Space between icon and text */
  }
`;

const PromotionalStatement = ({ text, buttonLabel, Icon }) => {
  return (
    <PromoContainer>
      <PromoText>{text}</PromoText>
      <PromoButton>
        {Icon && <Icon />}
        {buttonLabel}
      </PromoButton>
    </PromoContainer>
  );
};

PromotionalStatement.defaultProps = {
  text: 'Delivering Excellence in Logistics talk to us and be satisfied!',
  buttonLabel: 'Customer Service',
  Icon: FaComments,
};

export default PromotionalStatement;