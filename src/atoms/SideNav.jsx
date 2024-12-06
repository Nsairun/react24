import React, { useState } from 'react';
import styled from 'styled-components';
import Orderpop from '../atoms/Orderpop';
import TrackingPop from '../atoms/Tracking'; 
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

const SideNavbar = ({ isLoggedIn }) => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [showTrackingPopup, setShowTrackingPopup] = useState(false);

  const handleBookingClick = () => {
    if (isLoggedIn) {
      setShowOrderPopup(true);
    } else {
      alert('Please sign in to make a booking.');
    }
  };

  const handleTrackingClick = () => {
    if (isLoggedIn) {
      setShowTrackingPopup(true);
    } else {
      alert('Please sign in to track your goods.');
    }
  };

  return (
    <>
      <SideNavbarWrapper>
        <NavItem onClick={handleBookingClick}>
          <NavIcon><FaBook /></NavIcon>
          <NavLabel>Book</NavLabel>
        </NavItem>

        <NavItem onClick={handleTrackingClick}> {/* Add onClick for Tracking */}
          <NavIcon><FaShuttleVan /></NavIcon>
          <NavLabel>Tracking</NavLabel>
        </NavItem>
        
        <NavItem>
          <NavIcon><FaCalendarAlt /></NavIcon>
          <NavLabel>Schedule</NavLabel>
        </NavItem>
      </SideNavbarWrapper>

      {showOrderPopup && <Orderpop onClose={() => setShowOrderPopup(false)} />}
      {showTrackingPopup && <TrackingPop onClose={() => setShowTrackingPopup(false)} />} {/* Render TrackingPop */}
    </>
  );
};

export default SideNavbar;