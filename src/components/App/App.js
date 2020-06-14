import React from 'react';
import './App.css';
import Home from '../Home/Home.jsx'
import SummonerPage from '../SummonerPage/SummonerPage'
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/summoner/:id' component={SummonerPage} />
      </div>
    </Router>
  );
}

export default App;
