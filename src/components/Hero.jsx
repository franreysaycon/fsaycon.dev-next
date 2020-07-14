import React from 'react';
import styled from 'styled-components';
import HeroImage from '../public/hero.png';

const Box = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
`;

const HeroProper = styled.div`
    display: flex;
    align-items: center;
    background: url(${HeroImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 30rem;
    height: 40rem;
    transition: all ease-in 0.3s;
`;

const HeroDetails = styled.div`
  display: block;
  position: relative;
`;

const NameText = styled.span`
  font-family: ${({ theme }) => theme.fonts.lobster};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.white};
`;

const Hero = () => (
  <Box>
    <HeroProper>
      <HeroDetails>
        <NameText>Franrey Saycon</NameText>
      </HeroDetails>
    </HeroProper>
  </Box>
);

export default Hero;
