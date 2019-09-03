import React from 'react';
import { Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Login from './views/login/index'
import "./App.scss";

function App() {
  return (
      <Router>
          <Route path='/' component={Login}/>
      </Router>
  );
}

export default App;
