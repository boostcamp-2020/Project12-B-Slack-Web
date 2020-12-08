import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '@imgs/plus-icon.png';
import { ChannelModal } from '@components/molecules';
import { Icon } from '@components/atoms';

interface AddChannelButtonProps {}

const IconWrap = styled.div<any>`
  display: flex;
  cursor: pointer;
`;

const AddChannelButton: React.FC<AddChannelButtonProps> = ({ ...props }) => {
  const [isChannelModalOpened, setIsChannelModalOpened] = useState(false);

  const handlingHoverIconClick = () => {
    setIsChannelModalOpened(!isChannelModalOpened);
  };

  return (
    <>
      <IconWrap onClick={handlingHoverIconClick}>
        <Icon size="small" src={Plus} isHover={false} />
      </IconWrap>
      {isChannelModalOpened && <ChannelModal setIsChannelModalOpened={setIsChannelModalOpened}></ChannelModal>}
    </>
  );
};

export { AddChannelButton, AddChannelButtonProps };
