import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Rules from './components/Rules'
import Scores from './components/Scores'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="rules" component={Rules}/>
          <Route exact path="scores" component={Scores}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
