import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Buttons/Button';
import Nav from 'components/molcules/Nav';
import ProductGrid from 'components/atoms/ProductGrid';
import PSomenail from 'components/atoms/ProductSomenail';
import P1 from 'assets/imgs/1.png';
import P2 from 'assets/imgs/2.png';
import P3 from 'assets/imgs/3.png';
import P4 from 'assets/imgs/4.png';
import P5 from 'assets/imgs/5.png';
import P6 from 'assets/imgs/6.png';
import P7 from 'assets/imgs/7.png';
import P8 from 'assets/imgs/8.png';
import P9 from 'assets/imgs/9.png';
import P10 from 'assets/imgs/10.png';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
`;

const SamplePage: React.FC = () => {
  return (
    <div>
      <Nav />
      <Container>
        <div>
          <ProductGrid>
            <PSomenail bg={P1} />
            <PSomenail bg={P2} />
            <PSomenail bg={P3} />
            <PSomenail bg={P4} />
            <PSomenail bg={P5} />
            <PSomenail bg={P6} />
            <PSomenail bg={P7} />
            <PSomenail bg={P8} />
            <PSomenail bg={P9} />
            <PSomenail bg={P10} />
          </ProductGrid>
        </div>
      </Container>
    </div>
  );
};

export default SamplePage;
