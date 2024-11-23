// src/ErrorPage.jsx
import React from 'react';
import styled from 'styled-components';
import { useRouteError } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f8f9fa; /* Light background */
  color: #343a40; /* Dark text color */
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6rem; /* Large font size for the error code */
  margin: 0;
  font-weight: bold;
`;

const Message = styled.p`
  font-size: 1.5rem; /* Font size for the message */
  margin: 20px 0;
`;

const HomeLink = styled.a`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #007bff; /* Link color */
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
  return (
    <Container id='errorPage'>
      <Title>404</Title>
      <Message>Oops! The page you're looking for does not exist.</Message>
      <HomeLink href="/">Go Back to Home</HomeLink>
      <i>{error}</i>
    </Container>
  );
};

export default ErrorPage;