import React from 'react';

interface ChatroomProps {
  children: React.ReactNode;
}

const Chatroom: React.FC<ChatroomProps> = ({ children, ...props }) => {
  return <div {...props}>Hello</div>;
};

export { Chatroom };
