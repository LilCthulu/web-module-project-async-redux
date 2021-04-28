import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import { logger } from 'redux-logger'
import {Provider} from 'react-redux'
import thunk from "redux-thunk";

import RonSwanson from './components/RonSwanson'
import {swansonReducer} from './reducers/swansonReducer'


const store = createStore(swansonReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <RonSwanson/>
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}> <App /> </Provider>, rootElement)