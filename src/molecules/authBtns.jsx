import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../atoms/NavBtn'
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 20px;
  margin: 20px 0;
`;

function authBtns() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/RegistrationLogin')
  }
  return (
    <ButtonContainer>
        <Button onClick={handleNavigate}>Login</Button>
        <Button>Sign Up</Button>
    </ButtonContainer>
  )
}

export default authBtns