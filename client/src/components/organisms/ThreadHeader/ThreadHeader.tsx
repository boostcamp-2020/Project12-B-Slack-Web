import React from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { Text } from '@components/atoms';
import { HoverIcon } from '@components/molecules';
import CloseIcon from '@imgs/close-icon.png';
import { useHistory } from 'react-router-dom';
import { uriParser } from '@utils/index';
import { useSelector } from 'react-redux';
import { Size } from '@constants/index';

interface ThreadHeaderProps {}

const ThreadHeaderContainter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  height: 10%;
  box-shadow: 0 3px 2px -2px ${color.border_primary};
`;

const TitleContainer = styled.div``;

const TextWrap = styled.div`
  display: grid;
`;

const ThreadHeader: React.FC<ThreadHeaderProps> = ({ ...props }) => {
  const history = useHistory();
  const { title } = useSelector((store: any) => store.thread);
  const handlingCLoseButton = () => {
    history.push(`/client/${uriParser.getChatroomId()}`);
  };

  return (
    <ThreadHeaderContainter {...props}>
      <TitleContainer>
        <Text fontColor={color.primary} size={Size.SMALL} isBold>
          Thread
        </Text>
        <TextWrap>
          <Text size={Size.SMALL} isEllipsis>{`#${title}`}</Text>
        </TextWrap>
      </TitleContainer>
      <HoverIcon src={CloseIcon} onClick={handlingCLoseButton} size={Size.MEDIUM} />
    </ThreadHeaderContainter>
  );
};

export { ThreadHeader, ThreadHeaderProps };
