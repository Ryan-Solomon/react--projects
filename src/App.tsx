import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirthdayReminderPage from './pages/BirthdayReminderPage';
import ToursPage from './pages/ToursPage';
import MoviesPage from './pages/MoviesPage';

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
        <Route exact path='/tours'>
          <ToursPage />
        </Route>
        <Route exact path='/movies'>
          <MoviesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
