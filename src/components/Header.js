import React, { Component } from 'react'
import { connect } from 'react-redux'
import { request_auth } from './../actions/index';


export class Header extends Component {

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(request_auth());
    }
    render(){ 
        return (
            <div>
                <h1>ads</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  const {isAuthenticated} = state;
  return {
      isAuthenticated
  }

}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
