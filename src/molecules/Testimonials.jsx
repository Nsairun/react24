import React from 'react';
import styled from 'styled-components';

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TestimonialSection = styled.div`
  flex: 2;
  padding: 40px;
  display: flex;
  align-items: center;
`;

const TestimonialCard = styled.div`
  background-color: #f0f8ff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  flex: 1;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-right: 20px;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.1em;
  line-height: 1.5;
`;

const Author = styled.h4`
  margin: 10px 0 0;
  color: #2575fc; /* Author's name in the gradient color */
`;

const AdSection = styled.div`
  flex: 1;
  background-image: url('https://via.placeholder.com/500x600');
  background-size: cover;
  background-position: center;
  border-radius: 0 10px 10px 0;
`;

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      text: "The logistics service was outstanding! They delivered our goods on time and with excellent care.",
      author: "John Doe",
      image: "https://via.placeholder.com/200x200",
    },
    {
      id: 2,
      text: "I couldn't be happier with the service. They exceeded our expectations in every way.",
      author: "Jane Smith",
      image: "https://via.placeholder.com/200x200",
    },
  ];

  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <TestimonialSection>
          {testimonialData.map(({ id, text, author, image }) => (
            <TestimonialCard key={id}>
              <div>
                <Image src={image} alt={author} />
                <div>
                  <Text>"{text}"</Text>
                  <Author>- {author}</Author>
                </div>
              </div>
            </TestimonialCard>
          ))}
        </TestimonialSection>
        <AdSection />
      </TestimonialWrapper>
    </TestimonialContainer>
  );
};

export default Testimonials;