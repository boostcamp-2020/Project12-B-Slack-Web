import { color } from '@theme/index';
import React from 'react';
import styled from 'styled-components';

interface DropMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledDropMenuItem = styled.div`
  width: 100%;
  font-weight: 500;
  padding: 0.2rem 0rem;
  padding-left: 1.5rem;
  width: 13rem;
  color: ${color.text_tertiary};
  cursor: pointer;
  &:hover {
    color: ${color.text_secondary};
    background-color: ${color.hover_secondary};
  }
`;

const DropMenuItem: React.FC<DropMenuItemProps> = ({ children, onClick }) => {
  return <StyledDropMenuItem onClick={onClick}>{children}</StyledDropMenuItem>;
};

export { DropMenuItem, DropMenuItemProps };
