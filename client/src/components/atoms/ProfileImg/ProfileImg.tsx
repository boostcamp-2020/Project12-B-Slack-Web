import React from 'react';
import styled from 'styled-components';
import Logo from '@imgs/logo.png';
import { color } from '@theme/index';

interface ProfileImgProps {
  size?: 'small' | 'medium' | 'large';
  isHover?: boolean;
  src?: string;
}

const ProfileImgContainter = styled.div<ProfileImgProps>`
  display: absolute;
  width: ${(props) => {
    if (props.size === 'large') return '2.2rem';
    if (props.size === 'medium') return '1.4rem';
    return '0.7rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') return '2.2rem';
    if (props.size === 'medium') return '1.4rem';
    return '0.7rem';
  }};
  border-radius: ${(props) => {
    if (props.size === 'large') return '0.5rem';
    if (props.size === 'medium') return '0.3rem';
    return '0.2rem';
  }};
  background-color: ${color.primary};
`;

const Img = styled.img<any>`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => {
    if (props.size === 'large') return '0.5rem';
    if (props.size === 'medium') return '0.3rem';
    return '0.2rem';
  }};
  ${(props) => (props.isHover ? '&:hover { opacity: .5; };' : '')}
`;

const ProfileImg: React.FC<ProfileImgProps> = ({ size = 'medium', isHover = false, src = Logo, ...props }) => {
  return (
    <ProfileImgContainter size={size} isHover={isHover} {...props}>
      <Img size={size} isHover={isHover} src={src}></Img>
    </ProfileImgContainter>
  );
};

export { ProfileImg, ProfileImgProps };
