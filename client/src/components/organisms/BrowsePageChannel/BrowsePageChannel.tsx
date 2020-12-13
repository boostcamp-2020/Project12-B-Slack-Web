import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { color } from '@theme/index';
import { BrowsePageChannelHeader } from '@components/molecules/BrowsePageChannelHeader/BrowsePageChannelHeader';
import { BrowsePageChannelBody } from '@components/molecules/BrowsePageChannelBody/BrowsePageChannelBody';
import { BrowsePageChannelButton } from '@components/molecules/BrowsePageChannelButton/BrowsePageChannelButton';
import { useDispatch } from 'react-redux';
import { joinChannel } from '@store/actions/channel-action';

interface BrowsePageChannelProps {
  chatroomId: number;
  title: string;
  description?: string;
  isPrivate?: boolean;
  members: number;
  isJoined?: boolean;
}

const BrowsePageChannelContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${color.border_secondary};
  &:hover {
    background-color: ${color.hover_primary};
    button {
      display: flex;
    }
  }
`;

const BrowsePageChannelContent = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0.5rem;
`;

const ButtonWrap = styled.div<any>`
  display: flex;
  margin-right: 0.5rem;
  button {
    display: none;
  }
`;

const BrowsePageChannel: React.FC<BrowsePageChannelProps> = ({ chatroomId, title, isJoined, members, description, isPrivate, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handlingJoinButton = () => {
    dispatch(joinChannel({ chatroomId }));
    history.push(`/client/${chatroomId}`);
  };
  const handlingLeaveButton = () => {};
  return (
    <BrowsePageChannelContainer {...props}>
      <BrowsePageChannelContent>
        <BrowsePageChannelHeader title={title} isPrivate={isPrivate} {...props}></BrowsePageChannelHeader>
        <BrowsePageChannelBody isJoined={isJoined} members={members} description={description} {...props}></BrowsePageChannelBody>
      </BrowsePageChannelContent>
      <ButtonWrap>
        <BrowsePageChannelButton
          isJoined={isJoined}
          handlingJoinButton={handlingJoinButton}
          handlingLeaveButton={handlingLeaveButton}></BrowsePageChannelButton>
      </ButtonWrap>
    </BrowsePageChannelContainer>
  );
};

export { BrowsePageChannel, BrowsePageChannelProps };
