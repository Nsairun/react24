// src/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.button`
  background: none;
  gap: 1rem;
  display: flex;
  align-items: center;
  border: none;
  color: #666;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 20px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }
  return (
    <NavbarContainer>
        <Logo>CarryOn!</Logo>
        <NavLinks>
        <NavLink onClick={handleNavigate}>
         <small>Home</small>
          <FaHome />
        </NavLink>
        <NavLink>
         <small>Profilee</small>
          <FaUserCircle />
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;