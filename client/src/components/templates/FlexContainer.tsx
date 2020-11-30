import React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const FlexContainer: React.FC<any> = ({ children }) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};

export { FlexContainer };
