import React from 'react';
import { Text, Button } from '@components/atoms';
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
        <Button onClick={handlingLeaveButton} backgroundColor={color.primary} borderColor={color.tertiary} fontColor={color.tertiary} {...props}>
          <Text fontColor={color.text_secondary} size="superSmall">
            Leave
          </Text>
        </Button>
      ) : (
        <Button
          onClick={handlingJoinButton}
          backgroundColor={color.button_secondary}
          borderColor={color.tertiary}
          fontColor={color.tertiary}
          {...props}>
          <Text fontColor={color.text_secondary} size="superSmall">
            Join
          </Text>
        </Button>
      )}
    </>
  );
};

export { BrowsePageChannelButton, BrowsePageChannelButtonProps };
