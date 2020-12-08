import React from 'react';
import styled from 'styled-components';
import { ProfileImg } from '@components/atoms';
import { color } from '@theme/index';

interface MemberProps {
  name: string;
  profileUri: string;
}

interface UserBoxProps {
  member: Array<MemberProps>;
}

const UserBoxWrap = styled.div<any>`
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${color.hover_primary};
  }
  cursor: pointer;
`;

const ProfileImgWrap = styled.div<any>`
  border: 2px solid white;
  border-radius: 0.5rem;
  margin-left: -0.4rem;
`;

const Text = styled.div<any>`
  margin-left: 0.7rem;
  color: ${color.text_senary};
  font-weight: 600;
`;

const UserBox: React.FC<UserBoxProps> = ({ member, ...props }) => {
  const memberNum = member.length;
  const profileImgs: string[] = new Array(3);
  const loopValue = memberNum > 3 ? 3 : memberNum;

  for (let i = 0; i < loopValue; i += 1) {
    profileImgs.push(member[i].profileUri);
  }

  const createProfileImg = profileImgs.map((profileImg) => (
    <ProfileImgWrap>
      <ProfileImg src={profileImg} />
    </ProfileImgWrap>
  ));

  return (
    <UserBoxWrap {...props}>
      {createProfileImg}
      <Text>{memberNum}</Text>
    </UserBoxWrap>
  );
};

export { UserBox, UserBoxProps };
