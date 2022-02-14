import GlobalStyle from 'styles/globalStyles';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import {
  lightTheme,
  darkTheme,
  color,
  ftSize,
  iconSize,
  ftFamily,
} from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const light = {
  name: 'LIGHT',
  ftColor: color.black,
  bgColor: color.white,
  ftSize: ftSize,
  ftFamily: ftFamily,
  iconSize: iconSize,
  color: color,
};
const dark = {
  name: 'DARK',
  ftColor: color.white,
  bgColor: color.black,
  ftSize: ftSize,
  ftFamily: ftFamily,
  iconSize: iconSize,
  color: color,
};

const themes = [light, dark];
addDecorator(withThemesProvider(themes), ThemeProvider);

// export const decorators = [
//   (Story) => (
//     <>
//       <GlobalStyle />
//       <Story />
//     </>
//   ),
// ];
