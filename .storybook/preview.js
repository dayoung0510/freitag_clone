import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';

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
  ...lightTheme,
};
const dark = {
  name: 'DARK',
  ...darkTheme,
};

const themes = [light, dark];
addDecorator(withThemesProvider(themes), ThemeProvider);
