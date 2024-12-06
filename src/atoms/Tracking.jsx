import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #e0f7fa; /* Light cyan background */
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #00796b; /* Teal color */
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover {
    color: #004d40; /* Darker teal on hover */
  }
`;

const InputField = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #00796b; /* Teal border */
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #004d40; /* Darker teal on focus */
    outline: none; /* Remove default outline */
  }
`;

const SubmitButton = styled.button`
  background: #00796b; /* Teal button */
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #004d40; /* Darker teal on hover */
  }
`;

const TrackingPop = ({ onClose }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle tracking submission logic here
    console.log({ trackingNumber });
    onClose(); // Close the popup after submission
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <h2 style={{ textAlign: 'center', color: '#00796b' }}>Track Your Goods</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
          <SubmitButton type="submit">Track</SubmitButton>
        </form>
      </PopupContent>
    </PopupContainer>
  );
};

export default TrackingPop;