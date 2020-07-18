import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import HeroImage from '../../public/hero.png';

const StyledImage = styled(animated.img)`
  width: 25rem;
  transition: all ease-in 0.2s;
`;

const HeroArt = () => {
  const [spring, setSpring] = useSpring(() => ({ opacity: 0 }));
  const [imageLoaded, setImageLoaded] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = HeroImage;

    image.onload = () => {
      setImageLoaded(HeroImage);
    };
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (imageLoaded) {
        setSpring({ opacity: 1 });
      }
    }, 300);
    return () => {
      clearTimeout(delayTimer);
    };
  }, [imageLoaded]);

  return <StyledImage src={imageLoaded} style={spring} />;
};

export default HeroArt;
