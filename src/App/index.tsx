import React, { createContext } from 'react';
import SamplePage from 'pages/SamplePage';
import GlobalStyle from 'styles/globalStyles';
import { lightTheme, Theme } from 'styles/theme';
import { useDarkMode } from 'hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {},
});

const App: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <SamplePage />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
