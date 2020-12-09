import React, { useState } from 'react';
import styled from 'styled-components';
import { AddChannelButton } from '../AddChannelButton/AddChannelButton';

interface SectionProps {
  children: React.ReactNode;
  SectionName: string;
  isSelect?: boolean;
}

const SectionWrap = styled.div<any>`
  position: relative;
`;

const AddChannelButtonWrap = styled.div<any>`
  position: absolute;
  top: 0;
  right: 0.5rem;
`;

const StyledSection = styled.details<any>`
  color: rgb(198, 199, 200);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Summary = styled.summary<any>`
  outline: none;
  cursor: pointer;
  margin-bottom: 0.3rem;
`;

const Section: React.FC<SectionProps> = ({ children, SectionName = 'Section', isSelect = false, ...props }) => {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <SectionWrap>
      {isHover && (
        <AddChannelButtonWrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <AddChannelButton setHover={setHover} />
        </AddChannelButtonWrap>
      )}
      <StyledSection isSelect={isSelect} {...props} open>
        <Summary onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {SectionName}
        </Summary>
        {children}
      </StyledSection>
    </SectionWrap>
  );
};

export { Section, SectionProps };
