import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
background-color: ${({ primary }) => (primary ? '#007bff' : '#6c757d')};
color: white;
border: none;
border-radius: 4px;
padding: 4px 20px;
font-size: 0.9rem;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  background-color: ${({ primary }) => (primary ? '#0056b3' : '#5a6268')};
}

${({ disabled }) =>
  disabled &&
  css`
    background-color: #ccc;
    cursor: not-allowed;
  `}
`;



function NavBtn({children, primary, disabled, onClick}) {

  return (
    <StyledButton primary={primary} disabled={disabled} onClick={onClick}>
       {children} 
    </StyledButton>
  )
}

export default NavBtn