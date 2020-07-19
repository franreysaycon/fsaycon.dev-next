import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { GitHub, Linkedin, Mail } from 'react-feather';

const zoomAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; };
  100% { transform: scale(1); opacity: 1; }
`;

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

  animation-name: ${zoomAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

const IconBox = ({ type, onClick, animationDelay }) => {
  const [renderDelayed, setRenderDelayed] = useState(animationDelay > 0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (renderDelayed) {
      const tick = setTimeout(() => setRenderDelayed((state) => !state), animationDelay);
      return () => {
        clearTimeout(tick);
      };
    }
  }, [renderDelayed, animationDelay]);

  return (
    <>
      {
       !renderDelayed && (
       <Button>
         { type === 'github' && <GitHub aria-label="See my github profile." onClick={onClick} width="1.25rem" height="1.25rem" /> }
         { type === 'linkedin' && <Linkedin aria-label="See my linkedin profile." onClick={onClick} width="1.25rem" height="1.25rem" /> }
         { type === 'email' && <Mail aria-label="Email me at me@fsaycon.dev" onClick={onClick} width="1.25rem" height="1.25rem" /> }
       </Button>
       )
     }
    </>
  );
};

IconBox.defaultProps = {
  animationDelay: 0,
};

IconBox.propTypes = {
  type: PropTypes.oneOf(['github', 'linkedin', 'email']).isRequired,
  animationDelay: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default IconBox;
