import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import LoginSignup from './pages/LoginSignup';
//Importing components
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
          <Route
            exact={true}
            path = "/loginSignup"
            component = {LoginSignup}
          />
      </Router>
    </div>
  );
}

export default App;
