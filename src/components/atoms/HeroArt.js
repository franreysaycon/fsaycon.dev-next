/* eslint-disable no-await-in-loop */
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import HeroImage from '../../public/hero.png';
import CubeImage from '../../public/cube.png';

const cubeAnimation = keyframes`
  0% { top: 38%; opacity: 1; }
  25% { opacity: 0.8; }
  50% { top: 40%; opacity: 1; }
  75% { opacity: 0.8; }
  100% { top: 38%; opacity: 1; }
`;

const MechSuit = styled.img`
  width: 25rem;
`;

const Cube = styled(animated.img)`
  position: absolute;
  width: 10rem;
  z-index: 1;
  top: 38%;
  left: 28%;

  animation-name: ${cubeAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Container = styled(animated.div)`
  display: flex;
  position: relative;
`;

const HeroArt = () => {
  const [imageSpring, setImageSpring] = useSpring(() => ({ opacity: 0 }));
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [cubeLoaded, setCubeLoaded] = useState(false);
  const isHeroReady = heroLoaded && cubeLoaded;

  useEffect(() => {
    const preloadMechSuitImage = new Image();
    preloadMechSuitImage.src = HeroImage;
    const preloadCubeImage = new Image();
    preloadCubeImage.src = CubeImage;

    preloadMechSuitImage.onload = () => {
      setHeroLoaded(true);
    };

    preloadCubeImage.onload = () => {
      setCubeLoaded(true);
    };
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (isHeroReady) {
        setImageSpring({ opacity: 1 });
      }
    }, 300);
    return () => {
      clearTimeout(delayTimer);
    };
  }, [isHeroReady]);

  return (
    <Container style={imageSpring}>
      { heroLoaded && <MechSuit src={HeroImage} alt="Fantasy drawing of Franrey Saycon in a sci-fi mechanic suit with a robot helper." /> }
      { cubeLoaded && <Cube src={CubeImage} alt="Glowing mechanical puzzle cube." /> }
    </Container>
  );
};

export default HeroArt;
