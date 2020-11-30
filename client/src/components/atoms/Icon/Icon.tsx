import React from 'react';
import styled from 'styled-components';

interface IconProps {
  size?: 'small' | 'medium' | 'large';
  isHover?: boolean;
  src?: string;
  isSelect?: boolean;
}

const IconContainter = styled.div<IconProps>`
  width: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    return '0.8rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    return '0.8rem';
  }};
`;

const Img = styled.img<any>`
  width: 100%;
  height: 100%;
  ${(props) => (props.isHover ? '&:hover { opacity: .5; };' : '')}
  ${(props) => (props.isSelect ? 'filter: brightness(1.25);' : '')}
`;

const Icon: React.FC<IconProps> = ({ size = 'medium', isSelect = false, isHover = true, src = '', ...props }) => {
  return (
    <IconContainter size={size} isHover={isHover} {...props}>
      <Img isSelect={isSelect} isHover={isHover} src={src}></Img>
    </IconContainter>
  );
};

export { Icon, IconProps };
