import { connect } from 'react-redux';
import { Header } from './Header';

function mapReduxStateToReactProps(state: any) {
  return {
    profileUri: state.profileUri
  };
}

export default connect(mapReduxStateToReactProps)(Header);
