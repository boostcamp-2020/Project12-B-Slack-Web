import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '@imgs/plus-icon.png';
import { ChannelModal } from '@components/molecules';
import { Icon } from '@components/atoms';
import { DefaultSectionName } from '@constants/default-section-name';

interface AddChannelButtonProps {
  sectionName: string;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconWrap = styled.div<any>`
  display: flex;
  cursor: pointer;
`;

const AddChannelButton: React.FC<AddChannelButtonProps> = ({ setHover, sectionName, ...props }) => {
  const [isChannelModalOpened, setIsChannelModalOpened] = useState(false);

  const handlingHoverIconClick = () => {
    if (sectionName === DefaultSectionName.CHANNELS) {
      setIsChannelModalOpened(!isChannelModalOpened);
    }
  };

  const handlingCloseModal = () => {
    setHover(false);
    if (sectionName === DefaultSectionName.CHANNELS) {
      setIsChannelModalOpened(false);
    }
  };

  return (
    <>
      <IconWrap onClick={handlingHoverIconClick}>
        <Icon size="small" src={Plus} isHover={false} />
      </IconWrap>
      {isChannelModalOpened && <ChannelModal handlingCloseModal={handlingCloseModal} />}
    </>
  );
};

export { AddChannelButton, AddChannelButtonProps };
