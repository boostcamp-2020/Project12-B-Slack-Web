import React from 'react';
import styled from 'styled-components';

interface TextProps {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactChild;
  isBold?: boolean;
  isSelect?: boolean;
  isTitle?: boolean;
}

const StyledText = styled.p<any>`
  color: ${(props) => (props.isSelect || props.isTitle ? 'white' : 'rgb(198, 199, 200)')};
  font-size: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    return '1.0rem';
  }};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'none')};
  margin: 0;
`;

const Text: React.FC<TextProps> = ({ children, size = 'medium', isTitle = false, isBold = false, isSelect = false, ...props }) => {
  return (
    <StyledText size={size} isTitle={isTitle} isBold={isBold} isSelect={isSelect} {...props}>
      {children}
    </StyledText>
  );
};

export { Text, TextProps };
