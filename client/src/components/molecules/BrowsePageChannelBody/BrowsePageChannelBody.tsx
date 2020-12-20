import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { color } from '@theme/index';
import { Size } from '@constants/index';

interface BrowsePageChannelBodyProps {
  isJoined?: boolean;
  members: number;
  description?: string;
}

const BrowsePageChannelBodyWrap = styled.div<any>`
  display: flex;
  p {
    margin-right: 0.3rem;
  }
`;

const BrowsePageChannelBody: React.FC<BrowsePageChannelBodyProps> = ({ isJoined, members, description, ...props }) => {
  return (
    <BrowsePageChannelBodyWrap {...props}>
      {isJoined && (
        <Text fontColor={color.button_secondary} size={Size.SUPER_SMALL} isBold={true}>
          {`✓ Joined ·`}
        </Text>
      )}
      <Text fontColor={color.text_tertiary} size={Size.SUPER_SMALL}>
        {`${members} members`}
      </Text>
      {description && (
        <Text fontColor={color.text_tertiary} size={Size.SUPER_SMALL}>
          {`· ${description}`}
        </Text>
      )}
    </BrowsePageChannelBodyWrap>
  );
};

export { BrowsePageChannelBody, BrowsePageChannelBodyProps };
