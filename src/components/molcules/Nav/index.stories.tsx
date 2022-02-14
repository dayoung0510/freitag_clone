import { TransTitle } from 'components/atoms/StoryComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'styles/theme';
import Nav from '.';

export default {
  title: 'molcules/Nav',
  componenet: Nav,
};

export const Sample = () => {
  return (
    <>
      <TransTitle>light theme</TransTitle>
      <Nav />

      <TransTitle>dark theme</TransTitle>
      <ThemeProvider theme={darkTheme}>
        <Nav />
      </ThemeProvider>
    </>
  );
};
