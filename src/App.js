import React from 'react';
import { Route, Redirect } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';
import "./App.scss";

function App() {
  return (
      <Router>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
          <Redirect from="/" to="/login" />
      </Router>
  );
}

export default App;
