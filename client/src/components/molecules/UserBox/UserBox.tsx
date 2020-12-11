import React from 'react';
import styled from 'styled-components';
import { ProfileImg } from '@components/atoms';
import { color } from '@theme/index';
import { userboxModalOpen } from '@store/actions/modal-action';
import { useDispatch } from 'react-redux';

interface UserBoxProps {
  member: Array<any>;
}

const UserBoxWrap = styled.div<any>`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  border-radius: 0.2rem;
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
  const dispatch = useDispatch();
  const memberNum = member.length;
  const displayMembers: object[] = new Array(3);
  const loopValue = memberNum > 3 ? 3 : memberNum;

  for (let i = 0; i < loopValue; i += 1) {
    displayMembers.push({ id: member[i].userId, profileUri: member[i].profileUri });
  }

  const createProfileImg = displayMembers.map((Member: any) => (
    <ProfileImgWrap key={Member.id}>
      <ProfileImg src={Member.profileUri} />
    </ProfileImgWrap>
  ));

  return (
    <UserBoxWrap onClick={() => dispatch(userboxModalOpen())} {...props}>
      {createProfileImg}
      <Text>{memberNum}</Text>
    </UserBoxWrap>
  );
};

export { UserBox, UserBoxProps };
