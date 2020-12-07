import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LogoImg } from '@components/atoms';
import { ActiveProfileImg } from '@components/molecules';
import { color } from '@theme/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducers';
import { loginAsync } from '@store/actions/user-action';

interface HeaderProps {}

const HeaderContainter = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  min-height: 6%;
  background-color: ${color.primary};
  box-shadow: 0 1px 0 0 ${color.box_shadow_tertiary};
`;

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { profileUri } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAsync());
  }, []);

  return (
    <HeaderContainter {...props}>
      <LogoImg />
      <ActiveProfileImg src={profileUri} isHover={true} />
    </HeaderContainter>
  );
};

export { Header, HeaderProps };
