import { color } from '@theme/index';
import React from 'react';
import styled from 'styled-components';

interface TextProps {
  size?: 'small' | 'medium' | 'large' | 'big';
  children: React.ReactChild;
  isBold?: boolean;
  fontColor?: string;
  isSelect?: boolean;
  isTitle?: boolean;
}

const StyledText = styled.p<any>`
  color: ${(props) => (props.isSelect || props.isTitle ? color.text_secondary : props.color)};
  font-size: ${(props) => {
    if (props.size === 'big') return '3rem';
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    return '1.0rem';
  }};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'none')};
  margin: 0;
`;

const Text: React.FC<TextProps> = ({
  children,
  size = 'medium',
  fontColor = color.primary,
  isTitle = false,
  isBold = false,
  isSelect = false,
  ...props
}) => {
  return (
    <StyledText size={size} isTitle={isTitle} color={fontColor} isBold={isBold} isSelect={isSelect} {...props}>
      {children}
    </StyledText>
  );
};

export { Text, TextProps };
