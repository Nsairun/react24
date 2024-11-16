// Testimonial.js
import React from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.section`
  background-color: #f0f8ff;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: 30%;
  margin: auto;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.1em;
  line-height: 1.5;
`;

const Author = styled.h4`
  margin: 10px 0 0;
  color: black; /* Author's name in black */
`;

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      text: "The logistics service was outstanding! They delivered our goods on time and with excellent care.",
      author: "John Doe",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      text: "I couldn't be happier with the service. They exceeded our expectations in every way.",
      author: "Jane Smith",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <TestimonialSection>
      {testimonialData.map(({ id, text, author, image }) => (
        <TestimonialCard key={id}>
          <Image src={image} alt={author} />
          <div>
            <Text>"{text}"</Text>
            <Author>- {author}</Author>
          </div>
        </TestimonialCard>
      ))}
    </TestimonialSection>
  );
};

export default Testimonials;