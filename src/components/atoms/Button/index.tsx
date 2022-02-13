import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'App/index';

const Button = styled.button`
  border: ${({ theme }) => theme.ftColor} 1px solid;
  padding: 1rem;
  cursor: pointer;
  outline: none;

  color: ${({ theme }) => theme.bgColor};
  background-color: ${({ theme }) => theme.ftColor};
`;

const ThemeButton: React.FC = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} type="button">
      {children}
    </Button>
  );
};

export default ThemeButton;
