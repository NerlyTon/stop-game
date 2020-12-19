import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import Game from './components/Game'
import Rules from './components/Rules'
import Answer from './components/Answer';
import history from './history'
import Header from './components/Header';





function App() {
  return (
    <div className="App">
      {/* <ActionCableProvider url={API_WS_ROOT}> */}
      <Router history={history}>
        <Header/><br/><br/><br/>
        <Switch>
          <Route exact path="/" component={Game}/>
          <Route exact path="/rules" component={Rules}/>
          <Route path="/answer/:id" component={Answer}/>
        </Switch>
      </Router>
      {/* </ActionCableProvider> */}
    </div>
  );
}

export default App;
