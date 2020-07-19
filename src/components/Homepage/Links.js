import React from 'react';
import styled from 'styled-components';
import IconBox from '../atoms/IconBox';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(${({ theme }) => theme.spaces[0]} * 2 + 1.25rem); 

  button {
    margin-right: ${({ theme }) => theme.spaces[1]};
  }

  & > button:last-child {
    margin-right: 0px;
  }
`;

const openLinkInNewTab = (link) => {
  if (typeof window !== 'undefined') {
    window.open(link, '_target');
  }
};

const openMailTo = (email) => {
  if (typeof window !== 'undefined') {
    window.open(`mailto:${email}`, '_target');
  }
};

const Links = () => (
  <Container>
    <IconBox animationDelay={100} type="github" onClick={() => openLinkInNewTab('https://github.com/franreysaycon')} />
    <IconBox animationDelay={200} type="linkedin" onClick={() => openLinkInNewTab('https://www.linkedin.com/in/fssaycon/')} />
    <IconBox animationDelay={300} type="email" onClick={() => openMailTo('me@fsaycon.dev')} />
  </Container>
);

export default Links;
