import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactChild;
  width: string;
  height: string;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
}

const StyledButton = styled.button<any>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.fontColor};
  padding: 0.3rem 1rem;
`;

const Button: React.FC<ButtonProps> = ({ children, width, height, backgroundColor, borderColor, fontColor, ...props }) => {
  return (
    <StyledButton width={width} height={height} backgroundColor={backgroundColor} borderColor={borderColor} fontColor={fontColor} {...props}>
      {children}
    </StyledButton>
  );
};

export { Button, ButtonProps };
