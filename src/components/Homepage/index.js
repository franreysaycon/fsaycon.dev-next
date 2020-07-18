import React from 'react';
import styled from 'styled-components';
import Links from './Links';
import Box from '../atoms/Box';
import Content from '../atoms/Content';
import Header from '../atoms/Header';
import HeroArt from '../atoms/HeroArt';
import RobotArt from '../atoms/RobotArt';

const LeftSection = styled.div`
  display: none;
  height: inherit;

  @media(min-width: ${({ theme }) => theme.breakpoints[2]}){
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: inherit;
  align-items: center;
  z-index: 1;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  @media(min-width: ${({ theme }) => theme.breakpoints[2]}){
    margin-top: 0;
    margin-left: ${({ theme }) => theme.spaces[2]};
  }
`;

const Homepage = () => (
  <>
    <RobotArt />
    <Box>
      <LeftSection>
        <HeroArt />
      </LeftSection>
      <RightSection>
        <SectionContent>
          <Header>Breaking limits.</Header>
          <Content marginBottom={2}>
            {'Hi there, I’m '}
            <b>Franrey Saycon</b>
            .
          </Content>
          <Content marginBottom={2}>
            I am a software engineer specializing in architecting solutions and
            building web/mobile applications.
          </Content>
          <Content marginBottom={2}>
            I’m an experienced team lead and able to drive product and project management.
          </Content>
          <Content marginBottom={3}>
            I’m also a public speaker and tech community leader.
          </Content>
          <Links />
        </SectionContent>
      </RightSection>
    </Box>
  </>
);

export default Homepage;
