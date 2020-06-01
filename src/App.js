import React from 'react'
import Header from './components/HeaderContainer';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import Feed from './components/Feed';

const App = () => {
  return (
    <div>
      <Header/>
      <LoginPage/>
      <Feed />
    </div>
  )
}

export default App;
