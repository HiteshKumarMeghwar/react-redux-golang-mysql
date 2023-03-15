import React from 'react'
import './App.css'
import Nav from './navbar/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' Component={Dashboard} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register' Component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
