import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from 'components/organisms/Test';
import GlobalStyle from 'styles/globalStyles';
import { lightTheme, Theme } from 'styles/theme';
import { useDarkMode } from 'hooks/useDarkMode';

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
      <GlobalStyle theme={theme} />
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
