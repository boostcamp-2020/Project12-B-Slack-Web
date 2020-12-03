import React from 'react';
import styled from 'styled-components';
import { Icon, Text } from '@components/atoms';
import ChannelIcon from '@imgs/channel-icon.png';
import LockIcon from '@imgs/lock-icon.png';
import { useHistory } from 'react-router-dom';

interface ChannelProps {
  children: React.ReactChild;
  isPrivate?: boolean;
  isSelect?: boolean;
  chatroomId?: number;
  chatroomClick: any;
}

const ChannelContainter = styled.div<any>`
  display: flex;
  align-items: baseline;
  padding: 0.4rem 1rem;
  cursor: pointer;
  ${(props) => (props.isSelect ? 'background-color: #0576b9' : '&:hover { background-color: black;}')}
`;

const TextWrap = styled.div<any>`
  margin-left: 1rem;
`;

const Channel: React.FC<ChannelProps> = ({ children, chatroomClick, chatroomId, isPrivate = false, isSelect = false, ...props }) => {
  const history = useHistory();
  const handlingClick = () => {
    if (window.location.pathname !== `/client/${chatroomId}`) history.push(`/client/${chatroomId}`);
    chatroomClick(chatroomId);
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
