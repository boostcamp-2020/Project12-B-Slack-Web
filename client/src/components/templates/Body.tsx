import { channelModalClose } from '@store/actions/modal-action';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Body: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const handlingLeave = () => {
    dispatch(channelModalClose());
  };
  return <StyledBody onMouseLeave={handlingLeave}>{children}</StyledBody>;
};

export default Body;
