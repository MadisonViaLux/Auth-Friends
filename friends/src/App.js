import React from 'react';
import './App.css';

import Login from './components/Login'
// import FriendsList from './components/FriendsList'

import { Route, Link, Redirect } from "react-router-dom";





function App() {
  return (
    <div className="App">

      <div>
        <Link to='/'>Login</Link>
        <Link to='/FriendsList'>FriendsList</Link>
      </div>

      <Route exact path='/' component={Login} />
      <Route exact path='/FriendsList'  />

      {/* <Login /> */}

    </div>
  );
}

export default App;
