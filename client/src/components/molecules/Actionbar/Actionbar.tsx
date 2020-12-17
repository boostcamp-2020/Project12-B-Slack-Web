import React from 'react';
import styled from 'styled-components';
import { HoverIcon } from '@components/molecules';
import { color } from '@theme/index';
import EmojiIcon from '@imgs/emoji-icon.png';
import ThreadIcon from '@imgs/thread-icon.png';
import OptionIcon from '@imgs/option-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadThread } from '@store/actions/thread-action';
import { emojiPickerOpen } from '@store/actions/modal-action';
import { ChatType } from '@constants/index';

interface ActionbarProps {
  chatId: number;
  actionbarType?: string;
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

const Actionbar: React.FC<ActionbarProps> = ({ actionbarType = ChatType.Message, chatId, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const chatroomId = useSelector((state: any) => state.chatroom.selectedChatroomId);

  const openThread = () => {
    dispatch(loadThread(chatId));
    history.push(`/client/${chatroomId}/thread/${chatId}`);
  };
  const openEmojiPicker = (e: any) => {
    const x = window.pageXOffset + e.target.getBoundingClientRect().left;
    const y = window.pageYOffset + e.target.getBoundingClientRect().top;
    dispatch(emojiPickerOpen({ x, y, chatId }));
  };
  return (
    <ActionbarContainer {...props}>
      <HoverIcon size="medium" onClick={openEmojiPicker} src={EmojiIcon} />
      {actionbarType === ChatType.Message && <HoverIcon size="medium" onClick={openThread} src={ThreadIcon} />}
      <HoverIcon size="medium" src={OptionIcon} />
    </ActionbarContainer>
  );
};

export { Actionbar, ActionbarProps };
