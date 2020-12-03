import { connect } from 'react-redux';
import { Channel } from './Channel';

function mapDispatchToProps(dispatch: any) {
  return {
    chatroomClick(selectedChatroomId: number) {
      dispatch({ type: 'UPDATESIDEBAR', selectedChatroomId });
    }
  };
}

export default connect(null, mapDispatchToProps)(Channel);
