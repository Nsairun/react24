import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../molecules/authBtns';
import OrderSection from '../molecules/OrderSection';
import NextBtn from '../atoms/nextBtn';
import Gallery from '../atoms/Gallery';
import Image1 from '../images/testimg.jpg';
import Image2 from '../images/truck.jpg';
import Image3 from '../images/logistics.jpeg';
import Image4 from '../images/loginlog.png';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space between;
  gap: 1rem;
  padding: 80px;
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 10px;
  width: 99%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0; 
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 30px;
  background: linear-gradient(90deg, rgba(0, 123, 255, 0.8), rgba(0, 0, 0, 0.7)); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s, text-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

function HomeNavBar() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4
  ];

  const captions = [
    "Our First Image: A Beautiful Landscape",
    "Transporting Goods Efficiently",
    "Logistics in Action",
    "Our Reliable Fleet",
  ];

  return (
    <MainContainer>
    <NavbarContainer>
        <Logo>CarryOn!</Logo>
        <OrderSection />
        <div>
         <Button />
        </div>   
    </NavbarContainer>
    <NextBtn />
    <Gallery images = {images} captions= {captions} />
    </MainContainer >
  )
}

export default HomeNavBar;