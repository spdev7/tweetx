import React, { Component } from "react";

class Header extends Component {

//   constructor(props){
//       super(props);
//   }

  render() {
      const { isAuthenticated,handleChange } = this.props;
    return (
      <div>
          {isAuthenticated && <h1>true</h1>}
        <button onClick={handleChange}>
          CHANGE
        </button>
      </div>
    );
  }
}

export default Header
