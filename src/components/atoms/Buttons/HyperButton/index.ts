import styled from 'styled-components';
import { ftSize } from 'styles/theme';

type Props = {
  sz?: keyof typeof ftSize;
};

const HyperButton = styled.button<Props>`
  border: none;
  padding: 0.2rem;
  cursor: pointer;
  outline: none;
  background: none;
  font-family: 'Pretendard';

  font-size: ${({ theme, sz }) => sz && theme.ftSize[sz]};

  :hover {
    background: ${({ theme }) => theme.color.lime};
  }
`;

export default HyperButton;
