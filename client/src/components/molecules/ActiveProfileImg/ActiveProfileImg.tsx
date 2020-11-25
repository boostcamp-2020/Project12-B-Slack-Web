import React from 'react';
import styled from 'styled-components';
import { ActiveLight, ProfileImg } from '@components/atoms';

interface ActiveProfileImgProps {
  size?: 'small' | 'medium' | 'large';
  isHover?: boolean;
  src?: string;
  isActive?: boolean;
}

const ActiveProfileImgContainter = styled.div<ActiveProfileImgProps>`
  position: relative;
  width: ${(props) => {
    if (props.size === 'large') return '2.2rem';
    if (props.size === 'medium') return '1.4rem';
    return '1.1rem';
  }};
  height: ${(props) => {
    if (props.size === 'large') return '2.2rem';
    if (props.size === 'medium') return '1.4rem';
    return '1.1rem';
  }};
`;

const ActiveLightWrap = styled.div<any>`
  position: absolute;
  right: -5px;
  bottom: -5px;
  border-color: black;
  border-style: solid;
  border-radius: 1rem;
`;

const ActiveProfileImg: React.FC<ActiveProfileImgProps> = ({ size = 'medium', isActive = false, isHover = false, src = '', ...props }) => {
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