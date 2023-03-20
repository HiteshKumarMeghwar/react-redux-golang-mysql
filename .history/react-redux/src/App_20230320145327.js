import React from 'react'
import './App.css'
import Nav from './navbar/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import AllPosts from './components/AllPosts'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import MyPosts from './components/MyPosts'
import EditPosts from './components/EditPosts'
import AddPost from './components/AddPost'
import EditProfile from './components/EditProfile'
import VerifyProcess from './components/VerifyProcess'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' Component={Dashboard} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/all_posts' Component={AllPosts} />
          <Route exact path='/add_post' Component={AddPost} />
          <Route exact path='/about_us' Component={AboutUs} />
          <Route exact path='/contact_us' Component={ContactUs} />
          <Route exact path='/my_posts' Component={MyPosts} />
          <Route exact path='/edit_post/:id' Component={EditPosts} />
          <Route exact path='/edit_profile' Component={EditProfile} />
          <Route exact path='/email_verify/:email/:token' Component={VerifyProcess} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
