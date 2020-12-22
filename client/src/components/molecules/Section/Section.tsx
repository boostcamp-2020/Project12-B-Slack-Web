import React, { useState } from 'react';
import styled from 'styled-components';
import { DefaultSectionName } from '@constants/index';
import { AddChannelButton } from '../AddChannelButton/AddChannelButton';

interface SectionProps {
  children: React.ReactNode;
  sectionName: string;
  isSelect?: boolean;
}

const SectionWrap = styled.div`
  position: relative;
`;

const AddChannelButtonWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
`;

const StyledSection = styled.details`
  color: rgb(198, 199, 200);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Summary = styled.summary`
  outline: none;
  cursor: pointer;
  margin-bottom: 0.3rem;
`;

const Section: React.FC<SectionProps> = ({ children, sectionName = 'Section', isSelect = false, ...props }) => {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <SectionWrap>
      {isHover && DefaultSectionName.CHANNELS === sectionName && (
        <AddChannelButtonWrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <AddChannelButton setHover={setHover} sectionName={sectionName} />
        </AddChannelButtonWrap>
      )}
      <StyledSection {...props} open>
        <Summary onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {sectionName}
        </Summary>
        {children}
      </StyledSection>
    </SectionWrap>
  );
};

export { Section, SectionProps };
