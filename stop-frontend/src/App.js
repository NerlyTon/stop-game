import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Game from './components/Game'
import Rules from './components/Rules'
import Answer from './components/Answer';
import history from './history'
import Header from './components/Header';
import Footer from './components/Footer';
import 'animate.css'





function App() {
  return (
    <div className="App">
      {/* <ActionCableProvider url={API_WS_ROOT}> */}
      <Router history={history}>
        <Header/><br/><br/><br/>
        <Switch>
          <Route exact path="/" component={Rules}/>
          <Route exact path="/game" component={Game}/>
          <Route path="/answer/:id" component={Answer}/>
          {/* <Redirect from="/answer/:id" to="/" /> */}
        </Switch>
        <br/><br/><br/><br/><br/><br/><Footer/>
      </Router>
      {/* </ActionCableProvider> */}
    </div>
  );
}

export default App;
