import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'App/index';

const Button = styled.button`
  border: ${({ theme }) => theme.ftColor} 1px solid;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.bgColor};
  background: ${({ theme }) => theme.ftColor};
`;

const ToggleButton: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>CHANGE THEME</Button>;
};

export default ToggleButton;
