import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Nav from 'components/molcules/Nav';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
`;

const SamplePage: React.FC = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Button>sdfsdfsdf</Button>
      </Container>
    </div>
  );
};

export default SamplePage;
