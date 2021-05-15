import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/home';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">      
          <Switch>
            <Route path = "/" exact component = {Home}></Route>
          </Switch>      
        </div>
      </Router>
    </div>

  );
}

export default App;
