import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { ActiveProfileImg } from '@components/molecules';
import { useHistory } from 'react-router-dom';

interface DMProps {
  children: React.ReactChild;
  isSelect?: boolean;
  src?: string;
  chatroomId?: number;
  chatroomClick: any;
}

const DMContainter = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  cursor: pointer;
  ${(props) => (props.isSelect ? 'background-color: #0576b9' : '&:hover { background-color: black;}')}
`;

const TextWrap = styled.div<any>`
  margin-left: 1rem;
`;

const DM: React.FC<DMProps> = ({ children, chatroomClick, src, chatroomId, isSelect = false, ...props }) => {
  const history = useHistory();
  const handlingClick = () => {
    if (window.location.pathname !== `/client/${chatroomId}`) history.push(`/client/${chatroomId}`);
    chatroomClick(chatroomId);
  };

  return (
    <DMContainter isSelect={isSelect} onClick={handlingClick} {...props}>
      <ActiveProfileImg src={src} />
      <TextWrap>
        <Text size="small" isBold={false} isSelect={isSelect} children={children}></Text>
      </TextWrap>
    </DMContainter>
  );
};

export { DM, DMProps };
