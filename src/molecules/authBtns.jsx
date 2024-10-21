import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../atoms/NavBtn'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 20px;
  margin: 20px 0;
`;

function authBtns() {
  return (
    <ButtonContainer>
        <Button>Login</Button>
        <Button>Sign Up</Button>
    </ButtonContainer>
  )
}

export default authBtns