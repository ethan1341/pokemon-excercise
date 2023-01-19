import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {PokemonDetails} from './components/pokemon-details';
import {PokemonGeneral} from './components/pokemon-home';

import './App.css';

const App = ()=>{
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={PokemonGeneral} />
          <Route exact path="/pokemon-detail" component={PokemonDetails} />
        </div>
      </Router>
    </div>
  );
}

export default App;
