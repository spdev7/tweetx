import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
class Header extends Component {
  render() {
    const { isAuthenticated} = this.props;
    return (
      <Router>
        <div className="header">
          <div className="header-left">
            <span>TWEETX</span>
          </div>
          {isAuthenticated && (
            <div className="header-right">
              <div>
                <Link to="/feed">
                  <span>Feed</span>
                </Link>
              </div>
              <div>
                <Link to="/user">
                  <span>Users</span>
                </Link>
              </div>
              <div>
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default Header;
