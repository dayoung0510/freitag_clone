import styled from 'styled-components';

const Logo = styled.div`
  width: 10rem;
  height: 2.6rem;
  background-color: ${({ theme }) => theme.ftColor};
  color: ${({ theme }) => theme.bgColor};
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.ftFamily.Pretendard};
  font-weight: 900;
  letter-spacing: 4px;
`;

export default Logo;
