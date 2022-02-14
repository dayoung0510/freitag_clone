import styled from 'styled-components';

const ProductGrid = styled.div`
  padding: 1rem;
  display: grid;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 33.333%);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(8, 12.5%);
  }
`;

export default ProductGrid;
