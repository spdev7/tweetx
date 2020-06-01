import { connect } from 'react-redux'
import {request_auth } from '../actions';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.isAuthenticated,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      handleChange: () => dispatch(request_auth()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header);