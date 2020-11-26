import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/atoms';
import SendMessageIcon from '@imgs/send-message-icon.png';

interface SendMessageButtonProps {
  isActive: boolean;
}

const SendMessageButtonContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.3rem;
  height: 100%;
  padding: 0.3rem;
  border-radius: 0.3rem;
  ${(props) => (props.isActive ? 'background-color: #017a5a' : '')}
`;

const SendMessageButton: React.FC<SendMessageButtonProps> = ({ isActive, ...props }) => {
  return (
    <SendMessageButtonContainer isActive={isActive} {...props}>
      <Icon size="small" src={SendMessageIcon} isHover={false} isSelect={isActive} />
    </SendMessageButtonContainer>
  );
};

export { SendMessageButton, SendMessageButtonProps };
