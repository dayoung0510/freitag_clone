import { TransTitle } from 'components/atoms/StoryComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'styles/theme';
import Nav from '.';

export default {
  title: 'organisms/Nav',
  componenet: Nav,
  parameters: {
    componentSubtitle: '아 모르겠다 여기 아래에다 표를 넣고싶은데',
  },
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
