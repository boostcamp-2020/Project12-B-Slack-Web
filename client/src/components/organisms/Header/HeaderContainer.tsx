import { connect } from 'react-redux';
import { Header } from './Header';

function mapReduxStateToReactProps(state: any) {
  return {
    profileUri: state.userData.profileUri
  };
}

export default connect(mapReduxStateToReactProps)(Header);
