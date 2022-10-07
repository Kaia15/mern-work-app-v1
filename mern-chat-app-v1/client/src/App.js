import './App.css';
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from './context/context';
import SignUp from './../src/auth/signup/index'
import Login  from './auth/login/index'
import axios from 'axios'
import Profile from './pages/profile/profile';
import Home from './pages/home/home'
import { SnackbarProvider, useSnackbar } from 'notistack';
import Dashboard from './pages/dashboard';
import {BrowserRouter, Switch, Link, Route, Router} from 'react-router-dom'
import Edit from './pages/editprofile/index';
import Task from './pages/task/index'
import AddTask from './pages/task/task/indexadd'
import Message from './pages/message/index'
import Reminder from './pages/reminder/index';
import Timer from './pages/timer';
import Settings from './pages/settings';
import Active from './pages/active';
import Music from './pages/music'

function App() {
  return (
    <Switch>
      <Route exact path = '/'>
      <Home />
      </Route>
      <Route exact path = '/signup'>
        <SignUp />
      </Route>
      <Route exact path = '/login'>
        <Login />
      </Route>
      <Route exact path = '/dashboard'>
        <Dashboard />
      </Route>
      <Route exact path = '/profile'>
        <Profile />
      </Route>
      <Route exact path = '/editprofile'>
        <Edit />
      </Route>
      <Route exact path = '/task'>
        <Task />
      </Route>
      <Route exact path = '/addtask'>
        <AddTask />
      </Route>
      <Route exact path = '/message'>
        <Message />
      </Route>
      <Route exact path = '/reminders'>
        <Reminder />
      </Route>
      <Route exact path = '/timer'>
        <Timer />
      </Route>
      <Route exact path = '/settings'>
        <Settings />
      </Route>
      <Route exact path = '/active'>
        <Active />
      </Route>
      <Route>
        <Music />
      </Route>
    </Switch>
    
  )
}

export default App;
