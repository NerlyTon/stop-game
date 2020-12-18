import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import PlayerReducer from './redux/reducers/playerReducer'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =  createStore(PlayerReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <ActionCableProvider url={API_WS_ROOT}>
    <Provider store={store}>
    <App />
    </Provider>
    </ActionCableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
