import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';
import ToggleButton from 'components/atoms/ToggleButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import Icon from 'components/atoms/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.6rem;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Nav: React.FC = () => {
  return (
    <Container>
      <div style={{ height: '100%' }}>
        <Flex>
          <Logo>FREITAG</Logo>
          <Icon sz="md" bgGray cr="white">
            <MenuIcon />
          </Icon>
          <Icon sz="md" bgGray cr="white">
            <PersonIcon />
          </Icon>
          <Icon sz="md" bgGray cr="white">
            <FilterListIcon />
          </Icon>
        </Flex>
      </div>
      <ToggleButton>Toggle</ToggleButton>
    </Container>
  );
};

export default Nav;
