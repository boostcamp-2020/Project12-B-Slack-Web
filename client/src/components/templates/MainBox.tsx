import React from 'react';
import styled from 'styled-components';

const StyledMainBox = styled.main`
  width: 77%;
  height: 100%;
`;

const MainBox: React.FC<any> = ({ children }) => {
  return <StyledMainBox>{children}</StyledMainBox>;
};

export default MainBox;
