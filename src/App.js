import React from 'react'
import Header from './components/HeaderContainer';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div>
      <Header/>
      <LoginPage/>
    </div>
  )
}

export default App;
