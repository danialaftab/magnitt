import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
