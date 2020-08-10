import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import HomePage from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
            <HomePage />
            </Route>
          </Switch>
        </Router>
        
      </div>
    )
  }

}

export default App;
