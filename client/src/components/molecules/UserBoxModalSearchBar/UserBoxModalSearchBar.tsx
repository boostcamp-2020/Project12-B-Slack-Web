import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '@imgs/search-icon.png';
import CloseFilledIcon from '@imgs/close-filled-icon.png';
import { Icon } from '@components/atoms';
import { color } from '@theme/index';
import { KeyCode, Size } from '@constants/index';

interface UserBoxModalSearchBarProps {}

const UserBoxModalSearchBarWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${color.secondary};
  border-radius: 0.2rem;
  padding: 0.5rem 0.6rem;
  width: 30rem;
`;

const StyledInput = styled.input`
  border: 0 none;
  outline: none;
  width: fill-available;
  font-size: 1rem;
`;

const SearchIconWrap = styled.div`
  margin-right: 0.5rem;
`;

const CloseFilledIconWrap = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
`;

const UserBoxModalSearchBar: React.FC<UserBoxModalSearchBarProps> = ({ ...props }) => {
  const [searchWord, setSearchWord] = useState('');
  const searchInput: React.MutableRefObject<any> = useRef();
  const ContainerEl: React.MutableRefObject<any> = useRef();

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

  const onFocus = () => {
    const containerStyle = ContainerEl.current.style;
    containerStyle.boxShadow = 'inset 0 1px 2px rgba(27,31,35,0.075), 0 0 0 3px rgba(3,102,214,0.3)';
  };

  const onBlur = () => {
    const containerStyle = ContainerEl.current.style;
    containerStyle.boxShadow = 'none';
  };

  return (
    <UserBoxModalSearchBarWrap ref={ContainerEl} {...props}>
      <SearchIconWrap>
        <Icon size={Size.MEDIUM} src={SearchIcon} isHover={false} />
      </SearchIconWrap>
      <StyledInput
        ref={searchInput}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={`Search members`}
        onChange={onChangeSearchWord}
        onKeyPress={handlingKeyPressEnter}
      />
      {searchWord && (
        <CloseFilledIconWrap onClick={clearInputValue}>
          <Icon size={Size.MEDIUM} src={CloseFilledIcon} isHover={false} />
        </CloseFilledIconWrap>
      )}
    </UserBoxModalSearchBarWrap>
  );
};

export { UserBoxModalSearchBar, UserBoxModalSearchBarProps };
