import React, { Component } from "react";
import { Link} from "react-router-dom";

class Header extends Component {
  render() {
   console.log(this.props)
    const { isAuthenticated} = this.props;
    return (
        <div className="header">
          <div className="header-left">
            <h2><strong>Tweetx</strong></h2>
          </div>
          {isAuthenticated && (
            <div className="header-right">
              <div>
                <Link to="/feed">
                  <span className="heading text-secondary">Feed</span>
                </Link>
              </div>
              <div>
                <Link to="/user">
                  <span className="heading text-secondary">Users</span>
                </Link>
              </div>
              <div>
                <Link to="/profile">
                  <span className="heading text-secondary">Profile</span>
                </Link>
              </div>
            </div>
          )}
        </div>
    );
  }
}

export default Header;
