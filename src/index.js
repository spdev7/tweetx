import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  useFirebase,
} from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";

import firebase from './components/config/config'
import rootreducer from "./reducers/root";
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const middleware = [
  thunk.withExtraArgument({getFirebase,useFirebase,getFirestore}),
  
]

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage(state) {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}
const persistedState = loadFromLocalStorage()

const store = createStore(
  rootreducer,
  persistedState,
  composeEnhancers(
   // pass in firebase instance instead of config
    reduxFirestore(firebase), // <- needed if using firestore
    applyMiddleware(...middleware) // to add other middleware
  )

);

store.subscribe(() => saveToLocalStorage(store.getState()))

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
