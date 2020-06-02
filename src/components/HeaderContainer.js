import { connect } from 'react-redux'
import {request_auth } from '../actions';
import Header from './Header';

const mapStateToProps = (state) => {
  console.log(state)
    return {
      isAuthenticated: state.user.isAuthenticated,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      handleChange: () => dispatch(request_auth()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header);