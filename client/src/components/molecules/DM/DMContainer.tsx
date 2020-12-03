import { connect } from 'react-redux';
import { getChatroomInfo } from '@dispatch/index';
import { DM } from './DM';

function mapDispatchToProps(dispatch: any) {
  return {
    chatroomClick(selectedChatroomId: number) {
      dispatch({ type: 'UPDATESIDEBAR', selectedChatroomId });
      getChatroomInfo(selectedChatroomId);
    }
  };
}

export default connect(null, mapDispatchToProps)(DM);
