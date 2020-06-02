import React from "react";
import Header from "./components/HeaderContainer";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.css";
import Feed from "./components/Feed";
import ProfilePage from "./components/ProfilePage";
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import UserComponent from "./components/UserComponent";

const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <Route exact path="/" component={LoginPage} />
      <Route path="/feed" component={Feed} />
      <Route path="/user" component={UserComponent} />
      <Route path="/profile" component={ProfilePage}/>
    </div>
    </Router>
  );
};

export default App;
