import styled from 'styled-components';
import { color } from 'styles/theme';
import { TransTitle } from '../StoryComponent';

type Props = {
  cr?: string;
  ft?: string;
};

const Box = styled.div<Props>`
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ cr }) => cr};
  color: ${({ ft }) => (ft ? ft : '#fff')};
`;

export default {
  title: 'atoms/Color',
  component: Box,
};

export const Sample = () => {
  return (
    <>
      <TransTitle>Main Colors</TransTitle>
      <div style={{ display: 'flex' }}>
        <Box cr={color.black} style={{ border: '1px solid #000' }}>
          black
        </Box>
        <Box cr={color.white} ft="#000" style={{ border: '1px solid #000' }}>
          white
        </Box>
      </div>

      <TransTitle>Additional Colors</TransTitle>
      <div style={{ display: 'flex' }}>
        <Box cr={color.red}>red</Box>
        <Box cr={color.cyan}>cyan</Box>
        <Box cr={color.lime}>lime</Box>
      </div>
    </>
  );
};
