// RegistrationLoginPage.js
import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../atoms/field";
import { FaGoogle } from "react-icons/fa";
import logisticsImage from '../images/loginlog.png'; // Replace with the actual image path

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 50px;
  background-color: #f0f4f8; /* Light background color */
  height: 100vh; /* Full height for centering */
`;

const WelcomeContainer = styled.div`
  background: linear-gradient(135deg, #1e3c72, #2a5298, #4a90e2, #6ab7f8);
  padding: 30px;
  border-radius: 10px;
  height: 72vh;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0.9; /* Slight transparency */
  margin: 20px auto; /* Center the container */
  max-width: 600px; /* Limit the width */
`;

const WelcomeText = styled.h1`
  font-family: "Dancing Script", cursive; /* Change to your chosen font */
  font-size: 3rem; /* Big size */
  font-weight: bold;
  transform: rotate(-5deg); /* Slanty effect */
  margin: 0; /* Remove default margin */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow for better readability */
`;

const Image = styled.div`
  background-image: url(${logisticsImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px; /* Adjust height as needed */
  opacity: 0.7; /* Make the image transparent */
  border-radius: 10px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Space between tabs and forms */
`;

const Tab = styled.button`
  padding: 15px 25px;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  margin-right: 15px; /* Space between tabs */
  color: ${({ active }) => (active ? "#fff" : "#666")}; /* Active tab color */
  background-color: ${({ active }) =>
    active
      ? "#007bff"
      : "transparent"}; /* Brighter background for active tab */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    color: #fff; /* White text on hover */
  }

  &:focus {
    outline: none; /* Remove outline */
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px; /* Fixed width for forms */
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const GoogleButton = styled.button`
  padding: 10px;
  margin-top: 15px; /* Space above Google button */
  background-color: #007bff; /* Google red color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #caf0f8; /* Darker red on hover */
    color: #007bff;
  }

  &:focus {
    outline: none; /* Remove outline */
  }
`;

const RegistrationLoginPage = () => {
  const [activeTab, setActiveTab] = useState("register"); // State to manage active tab

  return (
    <Container>
      <WelcomeContainer>
        <WelcomeText>Welcome to Our Service!</WelcomeText>
        <p>Please register or log in to continue.</p>
        <Image />
      </WelcomeContainer>
      <div>
        <TabContainer>
          <Tab
            active={activeTab === "register"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </Tab>
          <Tab
            active={activeTab === "login"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </Tab>
        </TabContainer>

        {/* Registration Form */}
        <FormContainer>
          {activeTab === "register" && (
            <>
              <TextInput label="Name" id="name" placeholder="Enter your name" />
              <TextInput
                label="Email"
                id="email"
                placeholder="Enter your email"
              />
              <TextInput
                label="Password"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
              <TextInput
                label="Confirm Password"
                id="confirm-password"
                placeholder="Confirm your password"
                type="password"
              />
              <button type="submit">Register</button>
              <GoogleButton>Sign Up with Google</GoogleButton>{" "}
              {/* Google Auth Button */}
            </>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <>
              <TextInput
                label="Email"
                id="login-email"
                placeholder="Enter your email"
              />
              <TextInput
                label="Password"
                id="login-password"
                placeholder="Enter your password"
                type="password"
              />
              <button type="submit">Login</button>
              <GoogleButton>
                <FaGoogle style={{ marginRight: "10px" }} /> {/* Google icon */}
                Sign In with Google
              </GoogleButton>
            </>
          )}
        </FormContainer>
      </div>
    </Container>
  );
};

export default RegistrationLoginPage;
