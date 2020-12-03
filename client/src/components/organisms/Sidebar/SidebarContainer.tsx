import { connect } from 'react-redux';
import { Sidebar } from './Sidebar';

function mapReduxStateToReactProps(reducer: any) {
  const state = reducer.sidebarReducer;
  return {
    starred: state.starred,
    otherSections: state.otherSections,
    channels: state.channels,
    directMessages: state.directMessages,
    selectedChatroomId: state.selectedChatroomId
  };
}

export default connect(mapReduxStateToReactProps)(Sidebar);
