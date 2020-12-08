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
  newest_channel: 'Newest channel',
  oldest_channel: 'Oldest channel',
  most_members: 'Most members',
  a_to_z: 'A to Z',
  z_to_z: 'Z to A'
};

type SortMethod = typeof SortMethods[keyof typeof SortMethods];

const BrowsePageControlsWrap = styled.div<any>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
`;

const BrowsePageControlsButtonWrap = styled.div<any>`
  display: flex;
  p {
    margin-left: 0.3rem;
  }
`;

const BrowsePageControls: React.FC<BrowsePageControlsProps> = ({ channelCount, handlingSortButton, handlingFilterButton, ...props }) => {
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethods.a_to_z);

  return (
    <BrowsePageControlsWrap {...props}>
      <Text fontColor={color.primary} size="superSmall" isBold={true}>
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
