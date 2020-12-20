import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { ActiveProfileImg } from '@components/molecules';
import { useHistory } from 'react-router-dom';
import { color } from '@theme/index';
import { useDispatch } from 'react-redux';
import { pickChannel } from '@store/actions/chatroom-action';
import { Size } from '@constants/index';

interface DMProps {
  children: React.ReactChild;
  isSelect?: boolean;
  src?: string;
  chatroomId?: number;
}

const DMContainter = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  cursor: pointer;
  ${(props) => (props.isSelect ? `background-color: ${color.selected_chatroom}` : `&:hover { background-color: ${color.primary};}`)}
`;

const TextWrap = styled.div<any>`
  margin-left: 1rem;
`;

const DM: React.FC<DMProps> = ({ children, src, chatroomId, isSelect = false, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlingClick = () => {
    if (window.location.pathname !== `/client/${chatroomId}`) history.push(`/client/${chatroomId}`);
    dispatch(pickChannel({ selectedChatroomId: chatroomId }));
  };

  return (
    <DMContainter isSelect={isSelect} onClick={handlingClick} {...props}>
      <ActiveProfileImg src={src} />
      <TextWrap>
        <Text size={Size.SMALL} isBold={false} isSelect={isSelect} children={children}></Text>
      </TextWrap>
    </DMContainter>
  );
};

export { DM, DMProps };
