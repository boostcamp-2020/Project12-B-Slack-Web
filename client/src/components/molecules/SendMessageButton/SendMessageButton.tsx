import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/atoms';
import SendMessageIcon from '@imgs/send-message-icon.png';
import { color } from '@theme/index';

interface SendMessageButtonProps {
  isActive: boolean;
}

const SendMessageButtonContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 1.3rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  ${(props) => (props.isActive ? `background-color: ${color.button_secondary}` : '')}
`;

const SendMessageButton: React.FC<SendMessageButtonProps> = ({ isActive, ...props }) => {
  return (
    <SendMessageButtonContainer isActive={isActive} {...props}>
      <Icon size="small" src={SendMessageIcon} isHover={false} isSelect={isActive} />
    </SendMessageButtonContainer>
  );
};

export { SendMessageButton, SendMessageButtonProps };
