import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from '@theme/index';
import { ActiveLight, Text } from '@components/atoms';
import { getTimeConversionValue } from '@utils/time';

interface ProfileModalBodyProps {
  displayName: string;
}

const ProfileModalBodyContainter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const DisplayNameWrap = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 0.5rem;
  }
`;

const LocalTimeWrap = styled.div`
  margin-top: 1rem;
`;

const ProfileModalBody: React.FC<ProfileModalBodyProps> = ({ displayName, ...props }) => {
  const [localTime, setLocalTime] = useState(getTimeConversionValue(new Date()));

  useEffect(() => {
    const timerId = setInterval(() => {
      setLocalTime(getTimeConversionValue(new Date()));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [localTime]);

  return (
    <ProfileModalBodyContainter {...props}>
      <DisplayNameWrap>
        <Text fontColor={color.primary} size="medium" isBold={true}>
          {displayName}
        </Text>
        <ActiveLight size="medium" />
      </DisplayNameWrap>
      <LocalTimeWrap>
        <Text fontColor={color.text_tertiary} size="superSmall">
          Local time
        </Text>
        <Text fontColor={color.primary} size="small">
          {localTime}
        </Text>
      </LocalTimeWrap>
    </ProfileModalBodyContainter>
  );
};

export { ProfileModalBody, ProfileModalBodyProps };
