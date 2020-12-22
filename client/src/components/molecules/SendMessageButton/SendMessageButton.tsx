import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/atoms';
import SendMessageIcon from '@imgs/send-message-icon.png';
import { color } from '@theme/index';
import { Size } from '@constants/index';

interface SendMessageButtonProps {
  isActive: boolean;
  sendMessage: () => void;
}

const SendMessageButtonContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 1.3rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  ${(props) => (props.isActive ? `background-color: ${color.button_secondary}` : '')}
`;

const SendMessageButton: React.FC<SendMessageButtonProps> = ({ isActive, sendMessage, ...props }) => {
  const handlingClick = () => {
    sendMessage();
  };
  return (
    <SendMessageButtonContainer onClick={handlingClick} isActive={isActive} {...props}>
      <Icon size={Size.SMALL} src={SendMessageIcon} isHover={false} isSelect={isActive} />
    </SendMessageButtonContainer>
  );
};

export { SendMessageButton, SendMessageButtonProps };
