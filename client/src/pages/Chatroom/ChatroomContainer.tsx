import { connect } from 'react-redux';
import { Chatroom } from './Chatroom';

function mapReduxStateToReactProps(state: any) {
  return {
    selectedChatroomId: state.sidebarData.selectedChatroomId,
    title: state.chatroomData.title
  };
}

export default connect(mapReduxStateToReactProps)(Chatroom);
