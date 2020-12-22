import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '@imgs/search-icon.png';
import CloseFilledIcon from '@imgs/close-filled-icon.png';
import { Icon, Text } from '@components/atoms';
import { color } from '@theme/index';
import { KeyCode, Size } from '@constants/index';

interface BrowsePageSearchBarProps {}

const BrowsePageSearchBarWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${color.secondary};
  border-radius: 0.2rem;
  padding: 0.5rem 0.6rem;
`;

const StyledInput = styled.input`
  border: 0 none;
  outline: none;
  width: fill-available;
  font-size: 0.9rem;
`;

const InputHintWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIconWrap = styled.div`
  margin-right: 0.5rem;
`;

const CloseFilledIconWrap = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
`;

const BrowsePageSearchBar: React.FC<BrowsePageSearchBarProps> = ({ ...props }) => {
  const [searchWord, setSearchWord] = useState('');
  const searchInput: React.MutableRefObject<any> = useRef();

  const onChangeSearchWord = (e: any) => {
    setSearchWord(e.target.value);
  };

  const clearInputValue = () => {
    searchInput.current.value = '';
    setSearchWord('');
  };

  const handlingKeyPressEnter = (e: any) => {
    if (e.charCode === KeyCode.ENTER) {
      clearInputValue();
    }
  };

  return (
    <BrowsePageSearchBarWrap {...props}>
      <SearchIconWrap>
        <Icon size={Size.MEDIUM} src={SearchIcon} isHover={false} />
      </SearchIconWrap>
      <StyledInput
        ref={searchInput}
        placeholder={`Search by channel name or description`}
        onChange={onChangeSearchWord}
        onKeyPress={handlingKeyPressEnter}
      />
      {searchWord && (
        <>
          <InputHintWrap>
            <Text fontColor={color.primary} size={Size.SUPER_SMALL} isBold={true} width="max-content">
              Press enter to search
            </Text>
          </InputHintWrap>
          <CloseFilledIconWrap onClick={clearInputValue}>
            <Icon size={Size.MEDIUM} src={CloseFilledIcon} isHover={false} />
          </CloseFilledIconWrap>
        </>
      )}
    </BrowsePageSearchBarWrap>
  );
};

export { BrowsePageSearchBar, BrowsePageSearchBarProps };
