import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import ToggleButton from 'components/atoms/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav: React.FC = () => {
  return (
    <Flex>
      <Logo>FREITAG</Logo>
      <ToggleButton>Toggle</ToggleButton>
    </Flex>
  );
};

export default Nav;
