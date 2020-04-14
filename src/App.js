import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
//Importing pages
import LoginSignup from './pages/LoginSignup';
import About from './pages/About';
import Home from './pages/Home';

//Importing components
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
          <Route
            exact={true}
            path = "/"
            component = {Home}
          />
          <Route
            exact={true}
            path = "/loginSignup"
            component = {LoginSignup}
          />
          <Route
            exact={true}
            path = "/about"
            component = {About}
          />
      </Router>
    </div>
  );
}

export default App;
