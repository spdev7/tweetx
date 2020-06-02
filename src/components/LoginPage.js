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
    console.log(isAuthenticated);
    return (
      <div>
        {isAuthenticated === false && (
          <div>
            <Button outline color="danger" size="lg" onClick={this.toggle}>
              <span>{isLogin === false ? "Create Account" : "Login"}</span>
            </Button>
            {isLogin === false ? (
              <div>
                <h1>Login</h1>
                <InputGroup>
                  <div>
                    <Input placeholder="Email" size="lg" />
                  </div>
                  <div>
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
                <h1>Create Account</h1>
                <InputGroup>
                  <div>
                    <Input placeholder="Name" size="lg" />
                  </div>
                  <div>
                    <Input placeholder="Email" size="lg" />
                  </div>
                  <div>
                    <Input placeholder="Password" size="lg" />
                  </div>
                  <div>
                    <Input placeholder="Confirm Password" size="lg" />
                  </div>
                </InputGroup>
                <div className="login-button">
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
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: () => dispatch(request_auth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
