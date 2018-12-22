import React from 'react';
import { Router } from '@reach/router';
import Home from './Home/Home';
import Spellingz from './Pages/Spellingz';
import Favorites from './Pages/Favorites';

const Content = ({ collections }) => {
  return (
    <Router>
      <Home path="/" />
      <Spellingz path="/spellingz" data={collections.spellingz} />
      <Spellingz path="/spellingz/:id" data={collections.spellingz} />
      <Favorites path="/favorites" data={collections.favorites} />
      <Favorites path="/favorites/:id" data={collections.favorites} />
    </Router>
  );
};

export default Content;
