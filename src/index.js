// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'
import venuesReducer from './reducers/venuesReducer'
import favoritesReducer from './reducers/favoritesReducer'
import reservationsReducer from './reducers/reservationsReducer'
import searchesReducer from './reducers/searchesReducer'
import thunk from 'redux-thunk';
import { chainMiddleware } from 'redux-chain';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({ usersReducer, venuesReducer, favoritesReducer, reservationsReducer, searchesReducer })



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(chainMiddleware, thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
