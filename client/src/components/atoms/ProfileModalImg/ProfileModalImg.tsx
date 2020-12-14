import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';

interface ProfileModalImgProps {
  profileUri: string;
}

const ProfileModalImgContainter = styled.div<any>`
  display: flex;
  width: 18rem;
  height: 18rem;
  background-color: ${color.primary};
`;

const Img = styled.img<any>`
  width: 100%;
  height: 100%;
`;

const ProfileModalImg: React.FC<ProfileModalImgProps> = ({ profileUri, ...props }) => {
  return (
    <ProfileModalImgContainter {...props}>
      <Img src={profileUri}></Img>
    </ProfileModalImgContainter>
  );
};

export { ProfileModalImg, ProfileModalImgProps };
