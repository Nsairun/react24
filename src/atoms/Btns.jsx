
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-size: small;
  color: white;
  background-color: #add8e6; /* Light blue background */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #87ceeb; /* Slightly darker blue on hover */
  }

  &:active {
    transform: scale(0.95); /* Shrinks on click */
  }

  /* Optional: Disabled state styling */
  &:disabled {
    background-color: #b0e0e6; /* Light blue-gray for disabled */
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;