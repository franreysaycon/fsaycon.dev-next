import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.blinker};
  font-size: ${({ theme, size }) => theme.fontSizes[6 - size]};
  margin: 0;
  margin-bottom: ${({ theme, marginBottom }) => (marginBottom ? theme.spaces[marginBottom - 1] : 0)};
  font-weight: bold;
`;

const Header = ({ size, marginBottom, children }) => (
  <StyledHeader size={size} marginBottom={marginBottom}>{children}</StyledHeader>
);

Header.defaultProps = {
  size: 1,
  marginBottom: 1,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
};

export default Header;
