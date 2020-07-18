/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import IconBox from '../atoms/IconBox';

const Container = styled.div`
  display: flex;
  flex-direction: row;

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
    <IconBox type="github" onClick={() => openLinkInNewTab('https://github.com/franreysaycon')} />
    <IconBox type="linkedin" onClick={() => openLinkInNewTab('https://www.linkedin.com/in/fssaycon/')} />
    <IconBox type="email" onClick={() => openMailTo('me@fsaycon.dev')} />
  </Container>
);

export default Links;
