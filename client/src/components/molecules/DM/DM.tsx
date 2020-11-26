import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/atoms';
import { ActiveProfileImg } from '@components/molecules';

interface DMProps {
  children: React.ReactChild;
  isSelect?: boolean;
}

const DMContainter = styled.div<any>`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  cursor: pointer;
  ${(props) => (props.isSelect ? 'background-color: #0576b9' : '&:hover { background-color: black;}')}
`;

const TextWrap = styled.div<any>`
  margin-left: 1rem;
`;

const DM: React.FC<DMProps> = ({ children, isSelect = false, ...props }) => {
  return (
    <DMContainter isSelect={isSelect} {...props}>
      <ActiveProfileImg />
      <TextWrap>
        <Text size="small" isBold={false} isSelect={isSelect} children={children}></Text>
      </TextWrap>
    </DMContainter>
  );
};

export { DM, DMProps };
