import React from 'react';
import { Router } from '@reach/router';
import Home from './Home/Home';
import Culinary from './Pages/Culinary';
import DoesntGet from './Pages/DoesntGet';
import Favorites from './Pages/Favorites';
import Hates from './Pages/Hates';
import OhChuck from './Pages/OhChuck';
import Spellingz from './Pages/Spellingz';
import Wtf from './Pages/Wtf';

const Content = ({ collections }) => {
  const {
    culinary,
    doesntget,
    favorites,
    hates,
    ohchuck,
    spellingz,
    wtf,
  } = collections;

  return (
    <Router>
      <Home path="/" />
      <Culinary path="/culinary" data={culinary} />
      <DoesntGet path="/doesntget" data={doesntget} />
      <Favorites path="/favorites" data={favorites} />
      <Hates path="/hates" data={hates} />
      <OhChuck path="/ohchuck" data={ohchuck} />
      <Spellingz path="/spellingz" data={spellingz} />
      <Wtf path="/wtf" data={wtf} />
    </Router>
  );
};

export default Content;
