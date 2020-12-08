import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Text, Icon } from '@components/atoms';
import { color } from '@theme/index';
import SortIcon from '@imgs/sort-icon.png';
import FilterIcon from '@imgs/filter-icon.png';

interface BrowsePageControlsProps {
  channelCount: number;
  handlingSortButton: () => void;
  handlingFilterButton: () => void;
}

export const SortMethods = {
  NEWEST_CHANNEL: 'Newest channel',
  OLDEST_CHANNEL: 'Oldest channel',
  MOST_MEMBERS: 'Most members',
  A_TO_Z: 'A to Z',
  Z_TO_A: 'Z to A'
};

type SortMethod = typeof SortMethods[keyof typeof SortMethods];

const BrowsePageControlsWrap = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
`;

const BrowsePageControlsButtonWrap = styled.div<any>`
  display: flex;
  p {
    margin-left: 0.3rem;
  }
`;

const BrowsePageControls: React.FC<BrowsePageControlsProps> = ({ channelCount, handlingSortButton, handlingFilterButton, ...props }) => {
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethods.A_TO_Z);

  return (
    <BrowsePageControlsWrap {...props}>
      <Text fontColor={color.primary} size="small" isBold={true}>
        {`${channelCount} channels`}
      </Text>
      <BrowsePageControlsButtonWrap>
        <Button onClick={handlingSortButton} backgroundColor={color.primary} borderColor={color.tertiary} fontColor={color.tertiary} {...props}>
          <Icon size="small" src={SortIcon} isHover={false} />
          <Text fontColor={color.text_secondary} size="superSmall">
            {`Sort: ${sortMethod}`}
          </Text>
        </Button>
        <Button onClick={handlingFilterButton} backgroundColor={color.primary} borderColor={color.tertiary} fontColor={color.tertiary} {...props}>
          <Icon size="small" src={FilterIcon} isHover={false} />
          <Text fontColor={color.text_secondary} size="superSmall">
            Filter
          </Text>
        </Button>
      </BrowsePageControlsButtonWrap>
    </BrowsePageControlsWrap>
  );
};

export { BrowsePageControls, BrowsePageControlsProps };
