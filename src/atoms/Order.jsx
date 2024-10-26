// TextInput.js
import React from 'react';
import styled from 'styled-components';
import Field from './field'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px; 
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
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
      <Field type="text" id={id} placeholder={placeholder} />
    </InputContainer>
  );
};

export default TextInput;