import React from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './components/Login'
import {FriendsList} from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Route exact path='/'>
          <Link to='/api/login'>Login</Link>
        </Route>
        
        <PrivateRoute exact path='/api/friends' component={FriendsList} />
        
        <Route exact path='/api/login' component={Login} />
        
        hello there
      </header>
    </div> 
  );
}

export default App;
