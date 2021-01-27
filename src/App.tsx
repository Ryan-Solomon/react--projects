import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirthdayReminderPage from './pages/BirthdayReminderPage';
import ToursPage from './pages/ToursPage';
import MoviesPage from './pages/MoviesPage';
import AccordionPage from './pages/AccordionPage';
import GroceryListPage from './pages/GroceryListPage';
import { CocktailsPage } from './pages/CocktailsPage';
import { CartPage } from './pages/CartPage';
import { ImagesPage } from './pages/ImagesPage';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
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
          <Route exact path='/accordion'>
            <AccordionPage />
          </Route>
          <Route exact path='/groceries'>
            <GroceryListPage />
          </Route>
          <Route exact path='/cocktails'>
            <CocktailsPage />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/images'>
            <ImagesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
