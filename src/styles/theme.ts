import { red, cyan, lime } from '@mui/material/colors';

export const color = {
  red: red[500],
  cyan: cyan[300],
  lime: lime[700],
  black: '#010001',
  white: '#fdfdfd',
};

export const ftSize = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.2rem',
  xl: '1.5rem',
};

export const iconSize = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

export const ftFamily = {
  Score: 'Score',
  Pretendard: 'Pretendard',
};

export const lightTheme = {
  ftColor: color.black,
  bgColor: color.white,
  ftSize: ftSize,
  ftFamily: ftFamily,
  iconSize: iconSize,
  color: color,
};

export const darkTheme = {
  ftColor: color.white,
  bgColor: color.black,
  ftSize: ftSize,
  ftFamily: ftFamily,
  iconSize: iconSize,
  color: color,
};

export type Theme = typeof lightTheme;
