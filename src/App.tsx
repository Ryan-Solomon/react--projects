import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
