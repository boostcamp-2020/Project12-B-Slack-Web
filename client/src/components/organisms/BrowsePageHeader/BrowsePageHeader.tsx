import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@components/atoms';
import { color } from '@theme/index';
import { Size } from '@constants/index';

interface BrowsePageHeaderProps {
  onClick?: () => void;
}

const BrowsePageHeaderWrap = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
  box-shadow: 0 2px 2px -2px ${color.border_primary};
  background-color: ${color.tertiary};
  z-index: 2;
`;

const ContentWrap = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 0rem 1.6rem;
`;

const BrowsePageHeader: React.FC<BrowsePageHeaderProps> = ({ onClick, ...props }) => {
  return (
    <BrowsePageHeaderWrap {...props}>
      <ContentWrap>
        <Text size={Size.SMALL} fontColor={color.primary} isBold={true}>
          Channel browser
        </Text>
      </ContentWrap>
      <ContentWrap>
        <Button onClick={onClick} backgroundColor={color.tertiary} borderColor={color.secondary} fontColor={color.primary} {...props}>
          Create Channel
        </Button>
      </ContentWrap>
    </BrowsePageHeaderWrap>
  );
};

export { BrowsePageHeader, BrowsePageHeaderProps };
