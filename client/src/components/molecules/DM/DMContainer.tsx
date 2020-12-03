import { connect } from 'react-redux';
import { DM } from './DM';

function mapDispatchToProps(dispatch: any) {
  return {
    chatroomClick(selectedChatroomId: number) {
      dispatch({ type: 'UPDATESIDEBAR', selectedChatroomId });
    }
  };
}

export default connect(null, mapDispatchToProps)(DM);
