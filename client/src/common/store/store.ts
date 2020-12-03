import { createStore } from 'redux';
import { uriParser } from '@utils/index';

export default createStore((state: any, action: any) => {
  const initialState = {
    userId: null,
    profileUri: '',
    displayName: '',
    starred: [],
    otherSections: [],
    channels: [],
    directMessages: [],
    selectedChatroomId: uriParser.getChatroomId()
  };

  if (state === undefined) return initialState;

  switch (action.type) {
    case 'LOGIN':
      return { ...state, userId: action.userId, profileUri: action.profileUri, displayName: action.displayName };
    case 'LOGOUT':
      return { ...state, ...initialState };
    case 'INITSIDEBAR':
      return {
        ...state,
        starred: action.starred,
        otherSections: action.otherSections,
        channels: action.channels,
        directMessages: action.directMessages
      };
    case 'UPDATESIDEBAR':
      return {
        ...state,
        selectedChatroomId: action.selectedChatroomId
      };
    case 'SELECTCHATROOM':
      return {
        ...state,
        selectedChatroomId: action.selectedChatroomId
      };
    default:
      return state;
  }
});
