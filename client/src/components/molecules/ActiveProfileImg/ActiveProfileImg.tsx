import React from 'react';
import styled from 'styled-components';
import { ActiveLight, ProfileImg } from '@components/atoms';
import Logo from '@imgs/logo.png';
import { color } from '@theme/index';
import { Sizes, Size } from '@constants/index';

interface ActiveProfileImgProps {
  size?: Sizes;
  isHover?: boolean;
  src?: string;
  isActive?: boolean;
}

const ActiveProfileImgContainter = styled.div<ActiveProfileImgProps>`
  position: relative;
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
`;

const ActiveLightWrap = styled.div`
  position: absolute;
  right: -5px;
  bottom: -5px;
  border-color: ${color.primary};
  border-style: solid;
  border-radius: 1rem;
`;

const ActiveProfileImg: React.FC<ActiveProfileImgProps> = ({ size = Size.MEDIUM, isActive = true, isHover = false, src = Logo, ...props }) => {
  return (
    <ActiveProfileImgContainter size={size} {...props}>
      <ProfileImg size={size} isHover={isHover} src={src} />
      <ActiveLightWrap>
        <ActiveLight size={size} isActive={isActive} />
      </ActiveLightWrap>
    </ActiveProfileImgContainter>
  );
};

export { ActiveProfileImg, ActiveProfileImgProps };
