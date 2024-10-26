import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: bolder;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextInput = ({ label, id, placeholder }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input type="text" id={id} placeholder={placeholder} />
    </InputContainer>
  );
};

export default TextInput;