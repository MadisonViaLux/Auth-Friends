import React, { useState, useEffect } from "react";
import './App.css';

import Login from './components/Login'
import {FriendsList} from './components/FriendsList'

import { axiosAuth } from './components/axiosAuth'

import PrivateRoute from './components/PrivateRoute'
import { Route, Link } from "react-router-dom";



function App() {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosAuth()
    .get('http://localhost:5000/api/friends')
    .then( res => setFriends(res.data))
  }, [])

  console.log(friends)

  return (
    <div className="App">

      <div>
        <Link to='/'>Login</Link>
        <Link to='/api/friends'>FriendsList</Link>
      </div>

      <Route exact path='/' component={Login} />
      <PrivateRoute exact path='/api/friends' component={friends.map( e => (<FriendsList {...e}/>))} />

    </div>
  );
}

export default App;

