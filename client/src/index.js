import ReactDOM from 'react-dom';
import React from 'react';
import '../public/style/index.css';
import { createStore, applyMiddleware } from 'redux';
import movies from './reducers/movies.js';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App'

const store = createStore(movies, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>
        , document.getElementById('root')
);
