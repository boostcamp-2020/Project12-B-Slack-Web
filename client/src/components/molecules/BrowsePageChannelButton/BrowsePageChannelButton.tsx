import React from 'react';
import { Button } from '@components/atoms';
import { color } from '@theme/index';

interface BrowsePageChannelButtonProps {
  isJoined?: boolean;
  handlingJoinButton?: () => void;
  handlingLeaveButton?: () => void;
}

const BrowsePageChannelButton: React.FC<BrowsePageChannelButtonProps> = ({ isJoined, handlingJoinButton, handlingLeaveButton, ...props }) => {
  return (
    <>
      {isJoined ? (
        <Button
          onClick={handlingLeaveButton}
          backgroundColor={color.tertiary}
          borderColor={color.secondary}
          fontColor={color.primary}
          width="5rem"
          {...props}>
          Leave
        </Button>
      ) : (
        <Button
          onClick={handlingJoinButton}
          backgroundColor={color.button_secondary}
          borderColor={color.button_secondary}
          fontColor={color.text_secondary}
          width="5rem"
          {...props}>
          Join
        </Button>
      )}
    </>
  );
};

export { BrowsePageChannelButton, BrowsePageChannelButtonProps };
