
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Rock Paper Scissors</h1>
        <nav>
         
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
       
       
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
