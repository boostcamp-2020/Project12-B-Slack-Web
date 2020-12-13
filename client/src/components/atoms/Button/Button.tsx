import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
  isBold?: boolean;
  hoverColor?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.fontColor};
  padding: 0.3rem 1rem;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
  font-weight: ${(props) => (props.isBold ? 'bold' : null)};
  ${(props) => (props.hoverColor ? `&:hover { background-color: ${color.hover_primary}}` : '')}
  ${(props) => (props.width ? `width: ${props.width}}` : '')}
  ${(props) => (props.height ? `height: ${props.height}}` : '')}
`;

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, borderColor, fontColor, isBold, hoverColor, ...props }) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      fontColor={fontColor}
      isBold={isBold}
      hoverColor={hoverColor}
      {...props}>
      {children}
    </StyledButton>
  );
};

export { Button, ButtonProps };
