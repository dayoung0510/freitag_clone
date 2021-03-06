import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  margin: 1rem 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem;
`;

export const Desc = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const TransTitle = styled(Title)`
  background: none;
  color: black;
  padding: 0;
`;

export const Container = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
`;
