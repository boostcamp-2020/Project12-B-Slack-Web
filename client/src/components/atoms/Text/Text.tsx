import { Size, Sizes } from '@constants/index';
import { color } from '@theme/index';
import React from 'react';
import styled from 'styled-components';

interface TextProps {
  size?: Sizes;
  children: React.ReactChild;
  isBold?: boolean;
  fontColor?: string;
  isSelect?: boolean;
  isTitle?: boolean;
  width?: string;
  isHover?: boolean;
  isEllipsis?: boolean;
}

const StyledText = styled.p<TextProps>`
  color: ${({ isSelect, isTitle, fontColor }) => (isSelect || isTitle ? color.text_secondary : fontColor)};
  font-size: ${({ size }) => {
    if (size === Size.BIG) return '3rem';
    if (size === Size.LARGE) return '1.5rem';
    if (size === Size.MEDIUM) return '1.3rem';
    if (size === Size.SMALL) return '1.0rem';
    return '0.8rem';
  }};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'none')};
  margin: 0;
  width: ${({ width }) => width};
  ${({ isHover }) => isHover && `&:hover { text-decoration: underline }`}
  ${({ isEllipsis }) => isEllipsis && `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`}
`;

const Text: React.FC<TextProps> = ({
  children,
  size = Size.MEDIUM,
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
      fontColor={fontColor}
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
