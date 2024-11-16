import React from "react";
import HomeNavBar from "./orgs/HomeNavBar";
import LandingSection from './molecules/LandingImgSection'
import styled from "styled-components";
import Footer from './molecules/Footer';
import Testimonials from "./molecules/Testimonials";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;


function App() {
  return (
  <MainContainer>
    <HomeNavBar />
    <LandingSection />
    <Testimonials />
    <Footer />
  </MainContainer>
  );
}

export default App;
