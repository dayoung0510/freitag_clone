import styled, { css } from 'styled-components';
import { ftSize } from 'styles/theme';
import { lighten } from 'polished';

type Props = {
  sz?: keyof typeof ftSize;
  cr?: 'red' | 'cyan' | 'lime' | 'white' | 'black';
};

const Button = styled.button<Props>`
  border: none;
  padding: 0.8rem 1rem;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-family: 'Pretendard';

  color: ${({ theme }) => theme.bgColor};

  ${({ theme, cr }) => css`
    background-color: ${cr ? theme.color[cr] : theme.ftColor};

    &:hover {
      background: ${cr ? lighten(0.2, theme.color[cr]) : lighten(0.2, '#000')};
    }
  `}

  ${({ cr }) =>
    cr === 'white' &&
    css`
      color: ${({ theme }) => theme.color.black};
    `}

  ${({ cr }) =>
    cr === 'black' &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}

  ${({ sz }) =>
    sz === 'sm' &&
    css`
      padding: 0.25rem 0.5rem;
      font-size: ${({ theme }) => theme.ftSize.sm};
      font-weight: 400;
    `}

  ${({ sz }) =>
    sz === 'lg' &&
    css`
      padding: 1.2rem 1.4rem;
      font-weight: 800;
      font-size: ${({ theme }) => theme.ftSize.lg};
    `}
    
  ${({ sz }) =>
    sz === 'xl' &&
    css`
      padding: 2rem 2.5rem;
      font-weight: 900;
      font-size: ${({ theme }) => theme.ftSize.xl};
    `}
`;

export default Button;
