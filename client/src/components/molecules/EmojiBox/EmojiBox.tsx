import React, { useState } from 'react';
import styled from 'styled-components';
import { Emoji } from '@components/atoms';
import { color } from '@theme/index';

interface EmojiBoxProps {
  text: string;
  active: boolean;
  number: number;
}

const EmojiBoxContainer = styled.div<any>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 0.2rem;
  width: 3rem;
  background-color: ${(props) => (props.isActive ? color.emoji_bg : color.quaternary)};
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0 0 0 1px inset ${(props) => (props.isActive ? color.border_tertiary : color.quaternary)};

  ${(props) =>
    props.isActive
      ? null
      : `&:hover {
        background-color: ${color.tertiary};
        box-shadow: 0 0 0 1px inset;`}}
`;

const EmojiBoxText = styled.p<any>`
  font-size: 0.9rem;
  margin: 0;
`;

const EmojiBox: React.FC<EmojiBoxProps> = ({ active = false, number, text, ...props }) => {
  const [isActive, setActive] = useState(active);

  const handlingClick = () => {
    setActive(!isActive);
  };

  return (
    <EmojiBoxContainer isActive={isActive} onClick={handlingClick} {...props}>
      <Emoji text={text} />
      <EmojiBoxText> {number} </EmojiBoxText>
    </EmojiBoxContainer>
  );
};

export { EmojiBox, EmojiBoxProps };
