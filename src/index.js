import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';


import './index.css';
import AppContainer from './promotion-builder/app/container';
import rootReducer from './promotion-builder/reducers/rootReducer'

const createStoreWithMiddleware = applyMiddleware(
	reduxLogger
)(createStore);

const store = createStoreWithMiddleware(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
