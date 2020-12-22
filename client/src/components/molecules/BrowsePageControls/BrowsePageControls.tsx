import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { color } from '@theme/index';
import { WhiteButtonWithIcon } from '@components/molecules';
import SortIcon from '@imgs/sort-icon.png';
import FilterIcon from '@imgs/filter-icon.png';
import { Size, SortMethod, SortMethods } from '@constants/index';

interface BrowsePageControlsProps {
  channelCount: number;
}

const BrowsePageControlsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.4rem;
  padding-bottom: 1rem;
  margin-left: 1.5rem;
  margin-right: 2.5rem;
  border-bottom: 0.5px solid ${color.border_secondary};
`;

const BrowsePageControlsButtonWrap = styled.div`
  display: flex;
`;

const BrowsePageControls: React.FC<BrowsePageControlsProps> = ({ channelCount, ...props }) => {
  const [sortMethod, setSortMethod] = useState<SortMethods>(SortMethod.A_TO_Z);

  const handlingSortButton = () => {};
  const handlingFilterButton = () => {};

  return (
    <BrowsePageControlsWrap {...props}>
      <Text fontColor={color.primary} size={Size.SUPER_SMALL}>
        {`${channelCount} channels`}
      </Text>
      <BrowsePageControlsButtonWrap>
        <WhiteButtonWithIcon onClick={handlingSortButton} iconSrc={SortIcon}>
          {`Sort: ${sortMethod}`}
        </WhiteButtonWithIcon>
        <WhiteButtonWithIcon onClick={handlingFilterButton} iconSrc={FilterIcon}>
          Filter
        </WhiteButtonWithIcon>
      </BrowsePageControlsButtonWrap>
    </BrowsePageControlsWrap>
  );
};

export { BrowsePageControls, BrowsePageControlsProps };
