// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #007bff; /* Logistics-related color */
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;

  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #f1f1f1; /* Lighter color on hover */
    }
  }
`;

const SocialMediaIcons = styled.div`
  margin: 20px 0;

  a {
    color: white;
    margin: 0 10px;
    font-size: 24px; /* Size for social media icons */
    transition: color 0.3s;

    &:hover {
      color: #f1f1f1; /* Lighter color on hover */
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </FooterLinks>
      <SocialMediaIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialMediaIcons>
      <FooterText>&copy; {new Date().getFullYear()} Your Logistics Company. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;