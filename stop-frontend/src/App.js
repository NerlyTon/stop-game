import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import Home from './components/Home'
import Rules from './components/Rules'
import Scores from './components/Scores'


function App() {
  return (
    <div className="App">
      <ActionCableProvider url={API_WS_ROOT}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rules" component={Rules}/>
          <Route exact path="/scores" component={Scores}/>
        </Switch>
      </Router>
      </ActionCableProvider>
    </div>
  );
}

export default App;
