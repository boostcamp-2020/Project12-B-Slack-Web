import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  SectionName: string;
  isSelect?: boolean;
}

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
  return (
    <StyledSection isSelect={isSelect} {...props} open>
      <Summary>{SectionName}</Summary>
      {children}
    </StyledSection>
  );
};

export { Section, SectionProps };
