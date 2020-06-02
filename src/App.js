import React from 'react'
import Header from './components/HeaderContainer';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <div>
      <Header/>
      <LoginPage/>
      <Feed />
      {/* <ProfilePage/> */}
    </div>
  )
}

export default App;
