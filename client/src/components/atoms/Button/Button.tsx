import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  isBold?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<any>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.fontColor};
  padding: 0.3rem 1rem;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
  font-weight: ${(props) => (props.isBold ? 'bold' : null)};
`;

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, borderColor, fontColor, isBold, ...props }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} borderColor={borderColor} fontColor={fontColor} isBold={isBold} {...props}>
      {children}
    </StyledButton>
  );
};

export { Button, ButtonProps };
