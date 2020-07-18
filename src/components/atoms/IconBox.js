import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GitHub, Linkedin, Mail } from 'react-feather';

const Button = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: ${({ theme }) => theme.spaces[0]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border-radius: 50%;
  border: none;
  user-select: none;
  outline: none;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all ease-in 0.2s;
  }
`;

const IconBox = ({ type, onClick }) => (
  <Button>
    { type === 'github' && <GitHub aria-label="See my github profile." onClick={onClick} width="1.5rem" height="1.5rem" /> }
    { type === 'linkedin' && <Linkedin aria-label="See my linkedin profile." onClick={onClick} width="1.5rem" height="1.5rem" /> }
    { type === 'email' && <Mail aria-label="Email me at me@fsaycon.dev" onClick={onClick} width="1.5rem" height="1.5rem" /> }
  </Button>
);

IconBox.propTypes = {
  type: PropTypes.oneOf(['github', 'linkedin', 'email']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconBox;
