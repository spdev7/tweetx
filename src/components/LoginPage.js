import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, InputGroup, Input } from "reactstrap";
import { request_auth } from "./../actions/index";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  toggle = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };
  render() {
    const { isAuthenticated, handleChange } = this.props;
    const { isLogin } = this.state;
    return (
      <div className="loginPageContainer">
        {isAuthenticated === false && (
          <div>
            <Button style={{marginBottom:"0.5rem"}} outline color="danger" size="lg" onClick={this.toggle}>
              <span style={{marginBottom:"0.5rem"}}>{isLogin === false ? "Create Account" : "Login"}</span>
            </Button>
            {isLogin === false ? (
              <div>
                <h2 style={{marginBottom:"0.5rem"}} className="text-danger">Login</h2>
                <InputGroup>
                  <div style={{marginBottom:"0.8rem"}}>
                    <Input placeholder="Email" size="lg" />
                  </div>
                  <div style={{marginBottom:"0.8rem"}}>
                    <Input placeholder="Password" size="lg" />
                  </div>
                </InputGroup>
                <div className="login-button">
                  <div>Forgot Password ?</div>
                  <Button color="danger" onClick={handleChange}>
                    Login
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h2 style={{marginBottom:"0.5rem"}} className="text-danger">Create Account</h2>
                <InputGroup>
                  <div style={{marginBottom:"0.8rem"}}>
                    <Input placeholder="Name" size="lg" />
                  </div>
                  <div style={{marginBottom:"0.8rem"}}>
                    <Input placeholder="Email" size="lg" />
                  </div>
                  <div style={{marginBottom:"0.8rem"}}>
                    <Input placeholder="Password" size="lg" />
                  </div>
                  <div style={{marginBottom:"0.8rem"}}>
                    <Input placeholder="Confirm Password" size="lg" />
                  </div>
                </InputGroup>
                <div className="login-button">
                  <div></div>
                  <Button color="danger" onClick={this.toggle}>
                    Create Account
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: () => dispatch(request_auth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
