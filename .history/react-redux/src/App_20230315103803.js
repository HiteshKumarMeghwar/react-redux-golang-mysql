import React from 'react'
import './App.css'
import Nav from './navbar/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path='/' Component={Login} />
          <Route exact path='/' Component={Register} />
        </Switch>
      </Router>
    </>
  )
}

export default App
