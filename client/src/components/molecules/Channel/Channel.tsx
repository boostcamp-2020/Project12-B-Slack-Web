import React from 'react';
import styled from 'styled-components';
import { Icon, Text } from '@components/atoms';
import ChannelIcon from '@imgs/channel-icon.png';
import LockIcon from '@imgs/lock-icon.png';
import { useHistory } from 'react-router-dom';
import { color } from '@theme/index';
import { useDispatch } from 'react-redux';
import { pickChannel } from '@store/actions/chatroom-action';
import { getThreadId } from '@utils/uriParser';

interface ChannelProps {
  children: React.ReactChild;
  isPrivate?: boolean;
  isSelect?: boolean;
  chatroomId?: number;
}

const ChannelContainter = styled.div<any>`
  display: flex;
  align-items: baseline;
  padding: 0.4rem 1rem;
  cursor: pointer;
  ${(props) => (props.isSelect ? `background-color: ${color.selected_chatroom}` : `&:hover { background-color: ${color.primary};}`)}
`;

const TextWrap = styled.div<any>`
  margin-left: 1rem;
`;

const Channel: React.FC<ChannelProps> = ({ children, chatroomId, isPrivate = false, isSelect = false, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlingClick = () => {
    const threadId = getThreadId();
    const pathname = `/client/${chatroomId}${threadId && `/thread/${threadId}`}`;
    if (window.location.pathname !== pathname) history.push(pathname);
    dispatch(pickChannel({ selectedChatroomId: chatroomId }));
  };

  return (
    <ChannelContainter isSelect={isSelect} {...props} onClick={handlingClick}>
      <Icon size="small" isSelect={isSelect} src={isPrivate ? LockIcon : ChannelIcon} isHover={false} />
      <TextWrap>
        <Text size="small" isBold={false} isSelect={isSelect} children={children}></Text>
      </TextWrap>
    </ChannelContainter>
  );
};

export { Channel, ChannelProps };
