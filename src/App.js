import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CardsDB from './components/CardsDB';
import Header from './components/Header';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <UserCard />
          </Route>
          <Route path="/cards">
            <Header />
            <CardsDB />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
