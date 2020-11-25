import React from 'react';
import styled from 'styled-components';

interface IconProps {
  size?: 'small' | 'medium' | 'large';
  isHover?: boolean;
  src?: string;
}

const IconContainter = styled.div<IconProps>`
  width: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    return '1.0rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'medium') return '1.3rem';
    return '1.0rem';
  }};
`;

const Img = styled.img<any>`
  width: 100%;
  height: 100%;
  ${(props) => (props.isHover ? '&:hover { opacity: .5; };' : '')}
`;

const Icon: React.FC<IconProps> = ({ size = 'medium', isHover = true, src = '', ...props }) => {
  return (
    <IconContainter size={size} isHover={isHover} {...props}>
      <Img isHover={isHover} src={src}></Img>
    </IconContainter>
  );
};

export { Icon, IconProps };