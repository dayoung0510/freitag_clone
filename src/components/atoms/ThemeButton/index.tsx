import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'App/index';

const Button = styled.button`
  border: ${({ theme }) => theme.ftColor} 1px solid;
  outline: none;

  background-color: ${({ theme }) => theme.ftColor};
`;

const ThemeButton: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>TOGGLE!</Button>;
};

export default ThemeButton;
