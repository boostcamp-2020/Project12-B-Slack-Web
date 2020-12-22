import React from 'react';
import styled from 'styled-components';
import Plus from '@imgs/plus-icon.png';
import { Icon } from '@components/atoms';
import { useDispatch } from 'react-redux';
import { channelModalOpen } from '@store/actions/modal-action';
import { Size } from '@constants/index';

interface AddChannelButtonProps {
  sectionName: string;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconWrap = styled.div`
  display: flex;
  cursor: pointer;
`;

const AddChannelButton: React.FC<AddChannelButtonProps> = ({ setHover, sectionName, ...props }) => {
  const dispatch = useDispatch();
  const handlingHoverIconClick = (e: any) => {
    const x = window.pageXOffset + e.target.getBoundingClientRect().left;
    const y = window.pageYOffset + e.target.getBoundingClientRect().top;
    dispatch(channelModalOpen({ x, y }));
  };

  return (
    <>
      <IconWrap onClick={handlingHoverIconClick}>
        <Icon size={Size.SMALL} src={Plus} isHover={false} />
      </IconWrap>
    </>
  );
};

export { AddChannelButton, AddChannelButtonProps };
