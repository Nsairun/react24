// WhereSection.js
import React from 'react';
import styled from 'styled-components';
import TextInput from '../atoms/field';
import Btn from '../atoms/Btns';

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const WhereSection = () => {
  return (
    <SectionContainer>
      <TextInput label="Where From" id="from" placeholder="Enter location" />
      <TextInput label="Where To" id="to" placeholder="Enter location" />
      <TextInput label="Additional Info" id="info" placeholder="Enter additional info" />
      <Btn>Order</Btn>
    </SectionContainer>
  );
};

export default WhereSection;