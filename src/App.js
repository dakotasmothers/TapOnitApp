import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import HomePage from './components/Home/Home';
import Shop from './components/Shop/Shop';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage />
              <div className='shoplink'>
                <Link to='/Shop'>
                  <img className='homeImg' alt='cowboysstar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhLB1GbL6h8p2ySSdTormwdpMpgH__YvcmstgEg_z3uOmfmwKc2Ic8Vr0D&usqp=CAc'></img>
                </Link>
              </div>
            </Route>
            <Route path='/Shop'>
                <Link className='homeLink' to='/'>
                  <img className='starImg' alt='cowboysstar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRwbua8yUM7M0JuTKkpxFIBuE3liNm0L8iErTwIVaXtLO41Gbgjca4vijp4A&usqp=CAc'></img>
                </Link>
              <Shop />
            </Route>
          </Switch>
        </Router>
        
      </div>
    )
  }

}

export default App;
