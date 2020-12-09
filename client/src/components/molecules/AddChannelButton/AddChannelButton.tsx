import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '@imgs/plus-icon.png';
import { ChannelModal } from '@components/molecules';
import { Icon } from '@components/atoms';

interface AddChannelButtonProps {
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconWrap = styled.div<any>`
  display: flex;
  cursor: pointer;
`;

const AddChannelButton: React.FC<AddChannelButtonProps> = ({ setHover, ...props }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handlingHoverIconClick = () => {
    setIsOpened(!isOpened);
  };

  const handlingCloseModal = () => {
    setHover(false);
    setIsOpened(false);
  };

  return (
    <>
      <IconWrap onClick={handlingHoverIconClick}>
        <Icon size="small" src={Plus} isHover={false} />
      </IconWrap>
      {isOpened && <ChannelModal handlingCloseModal={handlingCloseModal} />}
    </>
  );
};

export { AddChannelButton, AddChannelButtonProps };
