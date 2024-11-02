// CircularGallery.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 50vw;
  overflow: hidden;
`;

const Image = styled.img`
  width: ${(props) => (props.isActive ? '50%' : '10vw')};
  height: ${(props) => (props.isActive ? '100%' : '10vw')};
  object-fit: cover;
  border-radius: 5%;
  transition: width 0.3s, height 0.3s, transform 0.3s;
  transform: ${(props) => (props.isActive ? 'scale(1.1)' : 'scale(1)')};
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bolder;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  z-index: 2;
`;

const CircularGallery = ({ images, captions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <GalleryContainer>
      {images.map((src, index) => {
        const angle = (index / images.length) * 2 * Math.PI;
        const radius = 20;
        const x = 50 + radius * Math.cos(angle + (currentIndex * (2 * Math.PI / images.length)));
        const y = 50 + radius * Math.sin(angle + (currentIndex * (2 * Math.PI / images.length)));

        return (
          <React.Fragment key={index}>
            <Image
              src={src}
              isActive={index === currentIndex}
              style={{
                left: `${x}vw`,
                top: `${y}vw`,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            />
            <Caption style={{ opacity: index === currentIndex ? 1 : 0 }}>
              {captions[index]}
            </Caption>
          </React.Fragment>
        );
      })}
    </GalleryContainer>
  );
};

export default CircularGallery;