import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { Text } from '@components/atoms';
import { HoverIcon } from '@components/molecules';
import CloseIcon from '@imgs/close-icon.png';
import { useHistory } from 'react-router-dom';
import { uriParser } from '@utils/index';
import { useSelector } from 'react-redux';

interface ThreadHeaderProps {}

const ThreadHeaderContainter = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  height: 10%;
  box-shadow: 0 3px 2px -2px ${color.border_primary};
`;

const TitleContainer = styled.div<any>``;
const TextWrap = styled.div<any>`
  display: grid;
`;

const ThreadHeader: React.FC<ThreadHeaderProps> = ({ ...props }) => {
  const history = useHistory();
  const { title } = useSelector((store: any) => store.chatroom.selectedChatroom);
  const handlingCLoseButton = () => {
    history.push(`/client/${uriParser.getChatroomId()}`);
  };

  return (
    <ThreadHeaderContainter {...props}>
      <TitleContainer>
        <Text fontColor={color.primary} size="small" isBold>
          Thread
        </Text>
        <TextWrap>
          <Text size="small" isEllipsis>{`#${title}`}</Text>
        </TextWrap>
      </TitleContainer>
      <HoverIcon src={CloseIcon} onClick={handlingCLoseButton} size="medium" />
    </ThreadHeaderContainter>
  );
};

export { ThreadHeader, ThreadHeaderProps };
