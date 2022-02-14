import React from 'react';
import styled, { css } from 'styled-components';
import { iconSize, color } from 'styles/theme';

type Props = {
  bgGray?: boolean;
  cr?: keyof typeof color;
  sz?: keyof typeof iconSize;
};

const Background = styled.div<Props>`
  ${({ bgGray }) =>
    bgGray &&
    css`
      background-color: #666;
      svg {
        color: '#fff';
      }
    `}

  padding: 0.5rem;
  svg {
    font-size: ${({ sz }) => (sz ? iconSize[sz] : '1rem')};
    color: ${({ cr, theme }) => (cr ? color[cr] : theme.ftColor)};
  }
`;

const Icon: React.FC<Props> = ({ children, bgGray, cr, sz }) => {
  return (
    <Background bgGray={bgGray} cr={cr} sz={sz}>
      {children}
    </Background>
  );
};

export default Icon;
