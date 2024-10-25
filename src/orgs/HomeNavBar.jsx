import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../molecules/authBtns';
import OrderSection from '../molecules/OrderSection';
import NextBtn from '../atoms/nextBtn';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 10px;
  width: 99%;
  background: rgba(255, 255, 255, 0.8); /* Light transparent background */
  backdrop-filter: blur(10px); /* Blur effect for the background */
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fix to the top */
  top: 0; /* Position at the top */
  left: 0; /* Align to the left */
  z-index: 1000; /* Ensure it stays on top of other elements */
`;

const Logo = styled.div`
  font-size: 2rem; /* Larger font size for impact */
  font-weight: bold;
  padding: 30px;
  background: linear-gradient(90deg, rgba(0, 123, 255, 0.8), rgba(0, 0, 0, 0.7)); /* Light blue-black gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Text fill color transparent for gradient */
  transition: transform 0.3s, text-shadow 0.3s; /* Transition for effects */

  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
    text-shadow: 0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 0, 0, 0.5); /* Glow effect */
  }
`;

function HomeNavBar() {
  return (
    <div>
    <NavbarContainer>
        <Logo>CarryOn!</Logo>
        <OrderSection />
        <div>
         <Button />
        </div>   
    </NavbarContainer>
    <NextBtn />
    </div >
  )
}

export default HomeNavBar;