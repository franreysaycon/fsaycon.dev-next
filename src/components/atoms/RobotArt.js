import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import RobotImage from '../../public/robot.png';

const StyledImage = styled(animated.img)`
  position: fixed;
  display: block;
  width: 25rem;
  right: -10rem;

  @media(min-width: ${({ theme }) => theme.breakpoints[2]}){
    display: none;
  }
`;

const RobotArt = () => {
  const [spring, setSpring] = useSpring(() => ({ opacity: 0 }));
  const [imageLoaded, setImageLoaded] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = RobotImage;

    image.onload = () => {
      setImageLoaded(RobotImage);
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

  return <StyledImage src={imageLoaded} style={spring} alt="A hovering robot with two hands and black matte paint." />;
};

export default RobotArt;
