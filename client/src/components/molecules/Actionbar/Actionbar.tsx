import React from 'react';
import styled from 'styled-components';
import { HoverIcon } from '@components/molecules';
import { color } from '@theme/index';
import EmojiIcon from '@imgs/emoji-icon.png';
import ThreadIcon from '@imgs/thread-icon.png';
import OptionIcon from '@imgs/option-icon.png';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface ActionbarProps {
  messageId: number;
}

const ActionbarContainer = styled.div<any>`
  display: flex;
  position: absolute;
  top: -1rem;
  right: 0.3rem;
  background-color: ${color.tertiary};
  border: 1.5px solid ${color.border_primary};
  border-radius: 0.2rem;
`;

const Actionbar: React.FC<ActionbarProps> = ({ messageId, ...props }) => {
  const history = useHistory();
  const chatroomId = useSelector((state: any) => state.chatroom.selectedChatroomId);
  const openThread = () => {
    history.push(`/client/${chatroomId}/thread/${messageId}`);
  };
  return (
    <ActionbarContainer {...props}>
      <HoverIcon size="medium" src={EmojiIcon} />
      <HoverIcon size="medium" onClick={openThread} src={ThreadIcon} />
      <HoverIcon size="medium" src={OptionIcon} />
    </ActionbarContainer>
  );
};

export { Actionbar, ActionbarProps };
