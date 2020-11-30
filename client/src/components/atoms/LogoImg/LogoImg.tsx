import React from 'react';
import styled from 'styled-components';
import LogoText from '@imgs/logo-text.png';

interface LogoImgProps {
  size?: 'small' | 'large';
}

const StyledLogoImg = styled.img<any>`
  height: ${(props) => (props.size === 'small' ? '2.4rem' : '5rem')};
  margin-bottom: -0.2rem;
  cursor: pointer;
`;

const LogoImg: React.FC<LogoImgProps> = ({ size = 'small', ...props }) => {
  return <StyledLogoImg src={LogoText} size={size} {...props} />;
};

export { LogoImg, LogoImgProps };
