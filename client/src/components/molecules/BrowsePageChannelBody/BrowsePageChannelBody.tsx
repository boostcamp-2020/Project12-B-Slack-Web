import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { color } from '@theme/index';

interface BrowsePageChannelBodyProps {
  isJoined?: boolean;
  memberCount: number;
  description?: string;
}

const BrowsePageChannelBodyWrap = styled.div<any>`
  display: flex;
  p {
    margin-right: 0.3rem;
  }
`;

const BrowsePageChannelBody: React.FC<BrowsePageChannelBodyProps> = ({ isJoined, memberCount, description, ...props }) => {
  return (
    <BrowsePageChannelBodyWrap {...props}>
      {isJoined && (
        <Text fontColor={color.button_secondary} size="superSmall" isBold={true}>
          {`✓ Joined ·`}
        </Text>
      )}
      <Text fontColor={color.text_tertiary} size="superSmall">
        {`${memberCount} members`}
      </Text>
      {description && (
        <Text fontColor={color.text_tertiary} size="superSmall">
          {`· ${description}`}
        </Text>
      )}
    </BrowsePageChannelBodyWrap>
  );
};

export { BrowsePageChannelBody, BrowsePageChannelBodyProps };
