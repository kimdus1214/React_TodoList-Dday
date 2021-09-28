import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { createStore } from 'redux';
// import RootReducer from './modules';

// const store = createStore(RootReducer);
// console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);