import React from 'react';
import styled from 'styled-components';
import Logo from '@imgs/logo.png';
import { color } from '@theme/index';
import { Size, Sizes } from '@constants/index';

interface ProfileImgProps {
  size?: Sizes;
  isHover?: boolean;
  src?: string;
}

const ProfileImgContainter = styled.div<ProfileImgProps>`
  display: absolute;
  width: ${({ size }) => {
    if (size === Size.LARGE) return '2.2rem';
    if (size === Size.MEDIUM) return '1.4rem';
    return '0.7rem';
  }};
  height: ${({ size }) => {
    if (size === Size.LARGE) return '2.2rem';
    if (size === Size.MEDIUM) return '1.4rem';
    return '0.7rem';
  }};
  border-radius: ${({ size }) => {
    if (size === Size.LARGE) return '0.5rem';
    if (size === Size.MEDIUM) return '0.3rem';
    return '0.2rem';
  }};
  background-color: ${color.primary};
`;

const Img = styled.img<ProfileImgProps>`
  width: 100%;
  height: 100%;
  border-radius: ${({ size }) => {
    if (size === Size.LARGE) return '0.5rem';
    if (size === Size.MEDIUM) return '0.3rem';
    return '0.2rem';
  }};
  ${({ isHover }) => (isHover ? '&:hover { opacity: .5; };' : '')}
`;

const ProfileImg: React.FC<ProfileImgProps> = ({ size = Size.MEDIUM, isHover = false, src = Logo, ...props }) => {
  return (
    <ProfileImgContainter size={size} isHover={isHover} {...props}>
      <Img alt="#" size={size} isHover={isHover} src={src}></Img>
    </ProfileImgContainter>
  );
};

export { ProfileImg, ProfileImgProps };
