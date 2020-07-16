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

const Section = styled.div`
  display: flex;
  flex: 1;
  height: inherit;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces[2]};
`;

const Image = styled.img`
  width: 25rem;
  transition: all ease-in 0.3s;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-family: ${({ theme }) => theme.fonts.blinker};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

const Introduction = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-family: ${({ theme }) => theme.fonts.blinker};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  margin-top: ${({ theme }) => theme.spaces[2]};
`;

const Hero = () => (
  <Box>
    <Section>
      <Image src={HeroImage} />
    </Section>
    <Section>
      <Content>
        <Header>Breaking limits.</Header>
        <Introduction>
          <div>
            {'Hi there, I’m '}
            <b>Franrey Saycon</b>
            .
          </div>
          <div>I am a software engineer specializing in architecting solutions and building web/mobile applications.</div>
        </Introduction>
        <Introduction>
          I’m an experienced team lead and able to drive product and project management.
        </Introduction>
        <Introduction>
          I’m also a public speaker and tech community leader.
        </Introduction>
      </Content>
    </Section>
  </Box>
);

export default Hero;
