import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import styled from 'styled-components';
import { Title, Desc } from 'components/atoms/StoryComponent';
import Icon from '.';

const Box = styled.div`
  width: fit-content;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export default {
  title: 'atoms/Icon',
  component: Icon,
};

export const Sample = () => {
  return (
    <>
      <Title>Icons - sm</Title>
      <Flex>
        <Box>
          <Icon sz="sm">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="sm">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="sm">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="sm" bgGray>
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="sm" bgGray>
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="sm" bgGray>
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="red">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="red">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="red">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="cyan">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="cyan">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="cyan">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="lime">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="lime">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="sm" cr="lime">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
      </Flex>

      <Title>Icons - md</Title>
      <Flex>
        <Box>
          <Icon sz="md">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="md">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="md">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="md" bgGray>
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="md" bgGray>
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="md" bgGray>
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="red">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="red">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="red">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="cyan">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="cyan">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="cyan">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="lime">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="lime">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="md" cr="lime">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
      </Flex>

      <Title>Icons - lg</Title>
      <Flex>
        <Box>
          <Icon sz="lg">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="lg">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="lg">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="lg" bgGray>
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="lg" bgGray>
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="lg" bgGray>
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="red">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="red">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="red">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="cyan">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="cyan">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="cyan">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="lime">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="lime">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="lg" cr="lime">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
      </Flex>

      <Title>Icons - xl</Title>
      <Flex>
        <Box>
          <Icon sz="xl">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="xl">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="xl">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="xl" bgGray>
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="xl" bgGray>
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="xl" bgGray>
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="red">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="red">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="red">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="cyan">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="cyan">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="cyan">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="lime">
            <MenuIcon />
          </Icon>
          <Desc>Menu</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="lime">
            <PersonIcon />
          </Icon>
          <Desc>Person</Desc>
        </Box>
        <Box>
          <Icon sz="xl" cr="lime">
            <FilterListIcon />
          </Icon>
          <Desc>FilterList</Desc>
        </Box>
      </Flex>
    </>
  );
};
