import { connect } from 'react-redux';
import { Header } from './Header';

function mapReduxStateToReactProps(reducer: any) {
  const state = reducer.userReducer;
  return {
    profileUri: state.profileUri
  };
}

export default connect(mapReduxStateToReactProps)(Header);
