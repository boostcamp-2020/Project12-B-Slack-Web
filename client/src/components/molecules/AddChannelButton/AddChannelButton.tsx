import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '@imgs/plus-icon.png';
import { ChannelModal } from '@components/molecules';
import { HoverIcon } from '../HoverIcon/HoverIcon';

interface AddChannelButtonProps {}

const AddChannelButtonWrap = styled.div<any>`
  position: relative;
`;

const HoverIconWrap = styled.div<any>`
  display: flex;
`;

const AddChannelButton: React.FC<AddChannelButtonProps> = ({ ...props }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handlingHoverIconClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <AddChannelButtonWrap>
      <HoverIconWrap onClick={handlingHoverIconClick}>
        <HoverIcon src={Plus} size="small"></HoverIcon>
      </HoverIconWrap>
      {isOpened && <ChannelModal onClick={handlingHoverIconClick}></ChannelModal>}
    </AddChannelButtonWrap>
  );
};

export { AddChannelButton, AddChannelButtonProps };
