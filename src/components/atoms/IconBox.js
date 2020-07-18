import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GitHub, Linkedin, Mail } from 'react-feather';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${({ theme }) => theme.spaces[0]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all ease-in 0.3s;
  }
`;

const IconBox = ({ type }) => (
  <Container>
    { type === 'github' && <GitHub /> }
    { type === 'linkedin' && <Linkedin /> }
    { type === 'email' && <Mail /> }
  </Container>
);

IconBox.propTypes = {
  type: PropTypes.oneOf(['github', 'linkedin', 'email']).isRequired,
};

export default IconBox;
