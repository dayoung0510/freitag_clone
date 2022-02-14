import styled, { ThemeProvider } from 'styled-components';
import { TransTitle as Title } from '../StoryComponent';
import Logo from '.';
import { darkTheme } from 'styles/theme';

export default {
  title: 'atoms/Logo',
  component: Logo,
};

const SampleLogo = styled(Logo)`
  height: 2.6rem;
`;

export const Sample = () => {
  return (
    <>
      <div>
        <Title>light theme</Title>
        <SampleLogo>FREITAG</SampleLogo>
      </div>

      <div>
        <Title>dark theme</Title>
        <ThemeProvider theme={darkTheme}>
          <SampleLogo>FREITAG</SampleLogo>
        </ThemeProvider>
      </div>
    </>
  );
};
