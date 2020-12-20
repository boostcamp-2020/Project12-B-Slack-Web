import { color } from '@theme/index';
import React from 'react';
import styled from 'styled-components';

interface TextProps {
  size?: 'superSmall' | 'small' | 'medium' | 'large' | 'big';
  children: React.ReactChild;
  isBold?: boolean;
  fontColor?: string;
  isSelect?: boolean;
  isTitle?: boolean;
  width?: string;
  isHover?: boolean;
  isEllipsis?: boolean;
}

const StyledText = styled.p<any>`
  color: ${(props) => (props.isSelect || props.isTitle ? color.text_secondary : props.color)};
  font-size: ${(props) => {
    if (props.size === 'big') return '3rem';
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    if (props.size === 'small') return '1.0rem';
    return '0.8rem';
  }};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'none')};
  margin: 0;
  width: ${(props) => props.width};
  ${(props) => props.isHover && `&:hover { text-decoration: underline }`}
  ${(props) => props.isEllipsis && `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`}
`;

const Text: React.FC<TextProps> = ({
  children,
  size = 'medium',
  fontColor = color.text_primary,
  isTitle = false,
  isBold = false,
  isSelect = false,
  width = 'auto',
  isHover = false,
  isEllipsis = false,
  ...props
}) => {
  return (
    <StyledText
      size={size}
      isTitle={isTitle}
      color={fontColor}
      isBold={isBold}
      isSelect={isSelect}
      width={width}
      isHover={isHover}
      isEllipsis={isEllipsis}
      {...props}>
      {children}
    </StyledText>
  );
};

export { Text, TextProps };
