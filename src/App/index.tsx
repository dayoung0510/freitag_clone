import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from 'components/organisms/Test';
import GlobalStyle from 'styles/globalStyles';
import { lightTheme, darkTheme, Theme } from 'styles/theme';
import { useDarkMode } from 'hooks/useDarkMode';

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {},
});

const App: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  console.log(theme);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
