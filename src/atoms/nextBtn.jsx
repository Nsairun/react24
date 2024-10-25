import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #007bff; /* Blue background */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  &:disabled {
    background-color: #ccc; /* Gray for disabled state */
    cursor: not-allowed;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 5px; /* Space between text and icon */
`;

function NextBtn({onClick, disabled}) {
  return (
  <div>
    <Button onClick={onClick} disabled={disabled}>
      Next Page
      <Icon icon={faChevronRight} />
    </Button>
  </div>
  );
}

export default NextBtn;
