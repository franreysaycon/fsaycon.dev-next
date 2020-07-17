import React from 'react';
import styled from 'styled-components';
import HeroArt from '../atoms/HeroArt';
import Header from '../atoms/Header';
import Content from '../atoms/Content';

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

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hero = () => (
  <Box>
    <Section>
      <HeroArt />
    </Section>
    <Section>
      <SectionContent>
        <Header>Breaking limits.</Header>
        <Content>
          {'Hi there, I’m '}
          <b>Franrey Saycon</b>
          .
        </Content>
        <Content marginBottom={2}>I am a software engineer specializing in architecting solutions and building web/mobile applications.</Content>
        <Content marginBottom={2}>
          I’m an experienced team lead and able to drive product and project management.
        </Content>
        <Content marginBottom={2}>
          I’m also a public speaker and tech community leader.
        </Content>
      </SectionContent>
    </Section>
  </Box>
);

export default Hero;
