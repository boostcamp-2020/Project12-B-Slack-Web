import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { BrowsePageChannelHeader } from '@components/molecules/BrowsePageChannelHeader/BrowsePageChannelHeader';
import { BrowsePageChannelBody } from '@components/molecules/BrowsePageChannelBody/BrowsePageChannelBody';
import { BrowsePageChannelButton } from '@components/molecules/BrowsePageChannelButton/BrowsePageChannelButton';

interface BrowsePageChannelProps {
  title: string;
  description?: string;
  isPrivate?: boolean;
  members: number;
  isJoined?: boolean;
  handlingJoinButton?: () => void;
  handlingLeaveButton?: () => void;
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

const BrowsePageChannel: React.FC<BrowsePageChannelProps> = ({
  title,
  isJoined,
  members,
  description,
  isPrivate,
  handlingJoinButton,
  handlingLeaveButton,
  ...props
}) => {
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
