import styled from 'styled-components';
import { TransTitle, Desc, Container } from '../StoryComponent';
import ToggleButton from './ToggleButton';
import Button from './Button';
import HyperButton from './HyperButton';

const Box = styled.div`
  text-align: center;
  margin-right: 0.5rem;
`;

export default {
  title: 'atoms/Button',
  component: ToggleButton,
};

export const Sample = () => {
  return (
    <>
      <TransTitle>Sizes</TransTitle>
      <Container>
        <Box>
          <Button sz="sm">BUTTON</Button>
          <Desc>small</Desc>
        </Box>
        <Box>
          <Button sz="md">BUTTON</Button>
          <Desc>medium</Desc>
        </Box>
        <Box>
          <Button sz="lg">BUTTON</Button>
          <Desc>large</Desc>
        </Box>
        <Box>
          <Button sz="xl">BUTTON</Button>
          <Desc>x-large</Desc>
        </Box>
      </Container>

      <TransTitle>Colors</TransTitle>
      <Container>
        <Box>
          <Button cr="black">BUTTON</Button>
          <Desc>black</Desc>
        </Box>
        <Box>
          <Button cr="white">BUTTON</Button>
          <Desc>white</Desc>
        </Box>
        <Box>
          <Button cr="red">BUTTON</Button>
          <Desc>red</Desc>
        </Box>
        <Box>
          <Button cr="cyan">BUTTON</Button>
          <Desc>cyan</Desc>
        </Box>
        <Box>
          <Button cr="lime">BUTTON</Button>
          <Desc>lime</Desc>
        </Box>
      </Container>

      <TransTitle>Toggle Theme Button</TransTitle>
      <Container>
        <ToggleButton />
      </Container>

      <TransTitle>Hyper Button</TransTitle>
      <Container>
        <Box>
          <HyperButton sz="sm">Forget your password?</HyperButton>
          <Desc>small</Desc>
        </Box>
        <Box>
          <HyperButton sz="md">Forget your password?</HyperButton>
          <Desc>medium</Desc>
        </Box>
        <Box>
          <HyperButton sz="lg">Forget your password?</HyperButton>
          <Desc>large</Desc>
        </Box>
        <Box>
          <HyperButton sz="xl">Forget your password?</HyperButton>
          <Desc>x-large</Desc>
        </Box>
      </Container>
    </>
  );
};
