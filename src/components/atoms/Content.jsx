import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.blinker};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  margin: 0;
  margin-bottom: ${({ theme, marginBottom }) => (marginBottom ? theme.spaces[marginBottom - 1] : 0)};
`;

const Content = ({ children, marginBottom }) => (
  <StyledDiv marginBottom={marginBottom}>{children}</StyledDiv>
);

Content.defaultProps = {
  marginBottom: 0,
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};

export default Content;
