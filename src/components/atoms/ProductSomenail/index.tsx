import React from 'react';
import styled from 'styled-components';

type Props = {
  bg: string;
};

const Div = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
`;

const PSomenail: React.FC<Props> = ({ bg }) => {
  return (
    <Div>
      <img alt="" src={bg} />
    </Div>
  );
};

export default PSomenail;
