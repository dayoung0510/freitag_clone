import { ThemeProvider } from 'styled-components';
import { TransTitle as Title } from '../StoryComponent';
import Logo from '.';
import { darkTheme } from 'styles/theme';

export default {
  title: 'atoms/Logo',
  component: Logo,
};

export const Sample = () => {
  return (
    <>
      <div>
        <Title>light theme</Title>
        <Logo>LOGO TITLE</Logo>
      </div>

      <div>
        <Title>dark theme</Title>
        <Logo>LOGO TITLE</Logo>
      </div>
    </>
  );
};
