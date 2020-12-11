import React from 'react';
import styled from 'styled-components';
import { Icon, Text } from '@components/atoms';
import ChannelIcon from '@imgs/channel-icon.png';
import LockIcon from '@imgs/lock-icon.png';
import { color } from '@theme/index';

interface BrowsePageChannelHeaderProps {
  title: string;
  isPrivate?: boolean;
}

const BrowsePageChannelHeaderWrap = styled.div<any>`
  display: flex;
  p {
    margin-left: 0.3rem;
  }
`;

const BrowsePageChannelHeader: React.FC<BrowsePageChannelHeaderProps> = ({ title, isPrivate, ...props }) => {
  return (
    <BrowsePageChannelHeaderWrap {...props}>
      <Icon size="small" src={isPrivate ? LockIcon : ChannelIcon} isHover={false} />
      <Text fontColor={color.primary} size="small" isBold={true}>
        {title}
      </Text>
    </BrowsePageChannelHeaderWrap>
  );
};

export { BrowsePageChannelHeader, BrowsePageChannelHeaderProps };
