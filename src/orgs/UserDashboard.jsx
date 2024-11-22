// UserDashboard.js
import React from 'react';
import styled from 'styled-components';
import { useUser } from '../atoms/UserContext';
import NavBar from './NavBar';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff; /* Light sky blue */
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Nav =styled.div`
  margin-bottom: 5%;
`

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const UserInfo = styled.div`
  flex-grow: 1;
`;

const UserName = styled.h2`
  margin: 0;
  color: #333;
`;

const UserDetail = styled.p`
  margin: 5px 0;
  color: #666;
`;

const TrackingSection = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TrackingTitle = styled.h3`
  margin-bottom: 15px;
  color: #333;
`;

const StatusList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StatusItem = styled.li`
  background: ${(props) => (props.isAdmin ? '#e0f7fa' : '#fff')};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const AdminButton = styled.button`
  background-color: #008cba; /* Button color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  display: ${(props) => (props.isAdmin ? 'inline' : 'none')};

  &:hover {
    background-color: #005f7f; /* Darker shade on hover */
  }
`;

const ShipmentHistorySection = styled.div`
  background: linear-gradient(to right, #00b4db, #0083b0);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const ShipmentHistoryTitle = styled.h3`
  margin-bottom: 20px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 24px;
`;

const ShipmentHistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ShipmentDetail = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: 20px;
`;

const ShipmentLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ShipmentValue = styled.span`
  color: #666;
  font-size: 16px;
`;

const UserDashboard = () => {
  const user = useUser();
  const isAdmin = user.role === 'admin';

  const shipmentHistory = [
    {
      from: '123 Logistics St, City, Country',
      to: '456 Delivery Rd, Destination, Country',
      date: 'November 18, 2024',
      time: '2:30 PM',
      receivedTime: '5:45 PM',
      place: 'Warehouse',
    },
    {
      from: '987 Shipping Ln, Warehouse, Country',
      to: '123 Logistics St, City, Country',
      date: 'November 17, 2024',
      time: '10:00 AM',
      receivedTime: '2:15 PM',
      place: 'Pending',
    },
    {
      from: '456 Delivery Rd, Destination, Country',
      to: '789 Receiving Blvd, City, Country',
      date: 'November 16, 2024',
      time: '9:00 AM',
      receivedTime: '12:00 PM',
      place: 'Received',
    },
  ];

  return (
    <DashboardContainer>
    <Nav><NavBar /></Nav>
      <UserProfile>
        <ProfilePic src={user.profilePic} alt="Profile" />
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserDetail>Email: {user.email}</UserDetail>
          <UserDetail>Phone: {user.phone}</UserDetail>
          <UserDetail>Address: {user.address}</UserDetail>
        </UserInfo>
      </UserProfile>
      <TrackingSection>
        <TrackingTitle>Track Your Shipment</TrackingTitle>
        <StatusList>
          <StatusItem>
            Warehouse <span>{isAdmin && <AdminButton>Edit</AdminButton>}</span>
          </StatusItem>
          <StatusItem>
            Pending <span>{isAdmin && <AdminButton>Edit</AdminButton>}</span>
          </StatusItem>
          <StatusItem>
            Received <span>{isAdmin && <AdminButton>Edit</AdminButton>}</span>
          </StatusItem>
        </StatusList>
        <UserDetail>Status: {user.shipmentStatus.status}</UserDetail>
        <UserDetail>Status Text: {user.shipmentStatus.statusText}</UserDetail>
      </TrackingSection>

      <ShipmentHistorySection>
        <ShipmentHistoryTitle>Shipment History</ShipmentHistoryTitle>
        {shipmentHistory.map((shipment, index) => (
          <ShipmentHistoryItem key={index}>
            <ShipmentDetail>
              <ShipmentLabel>From:</ShipmentLabel>
              <ShipmentValue>{shipment.from}</ShipmentValue>
            </ShipmentDetail>
            <ShipmentDetail>
              <ShipmentLabel>To:</ShipmentLabel>
              <ShipmentValue>{shipment.to}</ShipmentValue>
            </ShipmentDetail>
            <ShipmentDetail>
              <ShipmentLabel>Date:</ShipmentLabel>
              <ShipmentValue>{shipment.date}</ShipmentValue>
            </ShipmentDetail>
            <ShipmentDetail>
              <ShipmentLabel>Time:</ShipmentLabel>
              <ShipmentValue>{shipment.time}</ShipmentValue>
            </ShipmentDetail>
            <ShipmentDetail>
              <ShipmentLabel>Received Time:</ShipmentLabel>
              <ShipmentValue>{shipment.receivedTime}</ShipmentValue>
            </ShipmentDetail>
            <ShipmentDetail>
              <ShipmentLabel>Place:</ShipmentLabel>
              <ShipmentValue>{shipment.place}</ShipmentValue>
            </ShipmentDetail>
          </ShipmentHistoryItem>
        ))}
      </ShipmentHistorySection>
    </DashboardContainer>
  );
};

export default UserDashboard;