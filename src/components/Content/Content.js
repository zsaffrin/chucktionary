import React from 'react'
import { Router } from '@reach/router'
import Home from './Home/Home'
import Spellingz from "./Pages/Spellingz";

const Content = () => {
  return (
    <Router>
      <Home path="/" />
      <Spellingz path="/spellingz" />
    </Router>
  )
}

export default Content
