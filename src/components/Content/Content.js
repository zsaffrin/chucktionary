import React from 'react';
import { Router } from '@reach/router';
import Home from './Home/Home';
import Spellingz from './Pages/Spellingz';

const Content = ({ collections }) => {
  return (
    <Router>
      <Home path="/" />
      <Spellingz path="/spellingz" data={collections.spellingz} />
      <Spellingz path="/spellingz/:id" data={collections.spellingz} />
    </Router>
  );
};

export default Content;
