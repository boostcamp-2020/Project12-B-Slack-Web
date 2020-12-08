import React from 'react';
import styled from 'styled-components';
import { Button, Text, Icon } from '@components/atoms';
import { color } from '@theme/index';

interface BlackButtonWithIconProps {
  children: React.ReactChild;
  iconSrc: string;
  onClick: () => void;
}

const BlackButtonWithIconWrap = styled.div<any>`
  display: flex;
  p {
    margin-left: 0.3rem;
  }
`;

const BlackButtonWithIcon: React.FC<BlackButtonWithIconProps> = ({ children, iconSrc, onClick, ...props }) => {
  return (
    <BlackButtonWithIconWrap>
      <Button onClick={onClick} backgroundColor={color.primary} borderColor={color.tertiary} fontColor={color.tertiary} {...props}>
        <Icon size="small" src={iconSrc} isHover={false} />
        <Text fontColor={color.text_secondary} size="superSmall">
          {children}
        </Text>
      </Button>
    </BlackButtonWithIconWrap>
  );
};

export { BlackButtonWithIcon, BlackButtonWithIconProps };
