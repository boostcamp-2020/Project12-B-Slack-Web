import React from 'react';
import styled from 'styled-components';

interface EmojiProps {
  text: string;
}

const StyledEmoji = styled.p<any>`
  margin: 0;
`;

const Emoji: React.FC<EmojiProps> = ({ text }) => {
  return <StyledEmoji>{text}</StyledEmoji>;
};

export { Emoji, EmojiProps };
