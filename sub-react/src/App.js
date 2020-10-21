import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import RecoilTest from './recoil-test'
import CSSInJS from './css-in-js'
import Redux from './redux'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/recoil">
          <RecoilTest />
        </Route>
        <Route path="/css-in-js">
          <CSSInJS />
        </Route>
        <Route path="/redux">
          <Redux />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/**
        <img src={logo} className="App-logo" alt="logo" />
       */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link className="App-link" to="/recoil">
          Learn Recoil
        </Link>
        <Link className="App-link" to="/css-in-js">
          Learn CSS in JS
        </Link>
        <Link className="App-link" to="/redux">
          Learn Redux
        </Link>
      </header>
    </div>
  )
}
