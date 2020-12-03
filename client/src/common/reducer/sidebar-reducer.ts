import { uriParser } from '@utils/index';

const initialState = {
  starred: [],
  otherSections: [],
  channels: [],
  directMessages: [],
  selectedChatroomId: uriParser.getChatroomId()
};

const sidebarReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default sidebarReducer;
