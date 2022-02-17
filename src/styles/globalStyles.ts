import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Theme } from 'styles/theme';

interface ThemeInterface {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<ThemeInterface>`
${reset}
  html,
  body {
    color: ${({ theme }) => theme.ftColor};
    background-color: ${({ theme }) => theme.bgColor};
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: 18px;
    width: 100%;
    height: 100%;
    transition: all ease 0.7s 0s;
  }

  *, button, input, select, label {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  input[type="radio"] {
    margin: 0
  }

`;

export default GlobalStyle;
