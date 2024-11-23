import React from 'react';
import styled from 'styled-components';
import { FaBook, FaShuttleVan, FaCalendarAlt } from 'react-icons/fa';

const SideNavbarWrapper = styled.div`
  background-color: rgba(15, 42, 100, 0.85);
  border-radius: 10px;
  padding: 20px;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 60%;
  left: 0;
  top: 0;
  z-index: 1000;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(10px);
  }
`;

const NavIcon = styled.div`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const NavLabel = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

const SideNavbar = () => {
  return (
    <SideNavbarWrapper>
      <NavItem>
        <NavIcon><FaBook /></NavIcon>
        <NavLabel>Book</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon><FaShuttleVan /></NavIcon>
        <NavLabel>Tracking</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon><FaCalendarAlt /></NavIcon>
        <NavLabel>Schedule</NavLabel>
      </NavItem>
    </SideNavbarWrapper>
  );
};

export default SideNavbar;