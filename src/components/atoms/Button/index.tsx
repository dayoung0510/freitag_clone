import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: ${({ theme }) => theme.ftColor} 1px solid;
  padding: 1rem;
  cursor: pointer;
  outline: none;

  color: ${({ theme }) => theme.bgColor};
  background-color: ${({ theme }) => theme.ftColor};
`;

const ThemeButton: React.FC = ({ children }) => {
  return <Button type="button">{children}</Button>;
};

export default ThemeButton;
