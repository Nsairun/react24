// RegistrationLoginPage.js
import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../atoms/field";
import { FaGoogle } from "react-icons/fa";
import logisticsImage from '../images/loginlog.png';
import NavBar from '../orgs/NavBar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 100%;
  margin: 20px auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 20px;
  background-color: #f0f4f8;
  height: 100vh;
  width: 100%;
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
  opacity: 0.9;
  margin: 20px auto;
  max-width: 600px;
`;

const WelcomeText = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
  transform: rotate(-5deg);
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Image = styled.div`
  background-image: url(${logisticsImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  opacity: 0.7;
  border-radius: 10px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 15px 25px;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  margin-right: 15px;
  color: ${({ active }) => (active ? "#fff" : "#666")};
  background-color: ${({ active }) =>
    active
      ? "#007bff"
      : "transparent"};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const GoogleButton = styled.button`
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #caf0f8;
    color: #007bff;
  }

  &:focus {
    outline: none;
  }
`;

const RegistrationLoginPage = () => {
 
  const [activeTab, setActiveTab] = useState("register"); // State to manage active tab

  return (
    <MainContainer>
      <NavBar />
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
    </MainContainer>
  );
};

export default RegistrationLoginPage;
