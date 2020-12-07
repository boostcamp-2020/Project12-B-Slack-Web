const initialState = {
  chatType: '',
  description: '',
  isPrivate: false,
  title: '',
  topic: null,
  userCount: 0,
  users: []
};

const chatroomReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        chatType: action.chatType,
        description: action.description,
        isPrivate: action.isPrivate,
        title: action.title,
        topic: action.topic,
        userCount: action.userCount,
        users: action.users
      };
    default:
      return state;
  }
};

export default chatroomReducer;
