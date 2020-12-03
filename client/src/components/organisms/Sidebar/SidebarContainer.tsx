import { connect } from 'react-redux';
import { Sidebar } from './Sidebar';

function mapReduxStateToReactProps(state: any) {
  return {
    starred: state.sidebarData.starred,
    otherSections: state.sidebarData.otherSections,
    channels: state.sidebarData.channels,
    directMessages: state.sidebarData.directMessages,
    selectedChatroomId: state.sidebarData.selectedChatroomId
  };
}

export default connect(mapReduxStateToReactProps)(Sidebar);
