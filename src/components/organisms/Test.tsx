import React from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

const Test: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div>
      <div>
        <button type="button" onClick={toggleTheme}>
          체인지
        </button>
      </div>
    </div>
  );
};

export default Test;
