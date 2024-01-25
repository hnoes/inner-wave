import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Yoga from './components/pages/Yoga';
import Breathwork from './components/pages/Breathwork';
import Coaching from './components/pages/Coaching';
import Videos from './components/pages/Videos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/yoga' component={Yoga} />
          <Route path='/breathwork' component={Breathwork} />
          <Route path='/coaching' component={Coaching} />
          <Route path='/videos' component={Videos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
