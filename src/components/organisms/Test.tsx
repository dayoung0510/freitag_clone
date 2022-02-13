import React, { useContext } from 'react';
import { ThemeContext } from 'App/index';

const Test: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button type="button" onClick={toggleTheme}>
        토글테마
      </button>
    </div>
  );
};

export default Test;
