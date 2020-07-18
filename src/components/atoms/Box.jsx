import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  padding: ${({ theme }) => theme.spaces[3]};
  min-height: 600px;
  max-height: 1366px;
`;

const Box = ({ children }) => (
  <Container>{ children }</Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
