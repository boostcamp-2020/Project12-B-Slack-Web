import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  width: 100%;
  height: 94%;
`;

const Main: React.FC<any> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
