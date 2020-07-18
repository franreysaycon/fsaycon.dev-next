/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import IconBox from '../atoms/IconBox';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-right: ${({ theme }) => theme.spaces[1]};
  }

  &:last-child {
    margin-right: 0px;
  }
`;

const Links = () => (
  <Container>
    <a href="https://github.com/franreysaycon" target="_blank" rel="noreferrer"><IconBox type="github" /></a>
    <a href="https://www.linkedin.com/in/fssaycon/" target="_blank" rel="noreferrer"><IconBox type="linkedin" /></a>
    <a href="mailto:me@fsaycon.dev"><IconBox type="email" /></a>
  </Container>
);

export default Links;
