import React from "react";
import HomeNavBar from "./orgs/HomeNavBar";
import LandingSection from './molecules/LandingImgSection'
import styled from "styled-components";
import RegistrationLoginPage from "./orgs/RegistrationLogin";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; /* Arrange children vertically */
  gap: 1rem; /* Vertical gap of 1rem */
  padding: 20px; /* Optional padding */
  max-width: 800px; /* Limit the width */
  margin: 0 auto; /* Center the container */
  background-color: #f9f9f9; /* Light background color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;


function App() {
  return (
  <MainContainer>
    <HomeNavBar />
    <LandingSection />
    <RegistrationLoginPage />
  </MainContainer>
  );
}

export default App;
