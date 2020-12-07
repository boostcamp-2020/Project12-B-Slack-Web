import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { BrowsePageChannelHeader } from '@components/molecules/BrowsePageChannelHeader/BrowsePageChannelHeader';
import { BrowsePageChannelBody } from '@components/molecules/BrowsePageChannelBody/BrowsePageChannelBody';
import { BrowsePageChannelButton } from '@components/molecules/BrowsePageChannelButton/BrowsePageChannelButton';

interface BrowsePageChannelProps {
  name: string;
  isJoined?: boolean;
  memberCount: number;
  description?: string;
  isPrivate?: boolean;
  handlingJoinButton?: () => void;
  handlingLeaveButton?: () => void;
}

const BrowsePageChannelContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
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
  button {
    display: none;
  }
`;

const BrowsePageChannel: React.FC<BrowsePageChannelProps> = ({
  name,
  isJoined,
  memberCount,
  description,
  isPrivate,
  handlingJoinButton,
  handlingLeaveButton,
  ...props
}) => {
  return (
    <BrowsePageChannelContainer {...props}>
      <BrowsePageChannelContent>
        <BrowsePageChannelHeader name={name} isPrivate={isPrivate} {...props}></BrowsePageChannelHeader>
        <BrowsePageChannelBody isJoined={isJoined} memberCount={memberCount} description={description} {...props}></BrowsePageChannelBody>
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
