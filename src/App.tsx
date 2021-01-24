import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirthdayReminderPage from './pages/BirthdayReminderPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/birthday'>
          <BirthdayReminderPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
