import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import userReducer from "./reducers";
import thunk from "redux-thunk";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  getFirebase,
  useFirebase,
} from "react-redux-firebase";
import {
  createFirestoreInstance,
  firestoreReducer,
  getFirestore,
} from "redux-firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDE5FNoZDbhGIH7oMyK3YxdfRurwuDe8-Q",
  authDomain: "therapy-66bfa.firebaseapp.com",
  databaseURL: "https://therapy-66bfa.firebaseio.com",
  projectId: "therapy-66bfa",
  storageBucket: "therapy-66bfa.appspot.com",
  messagingSenderId: "7042711669",
  appId: "1:7042711669:web:4088280f6a0a29f23f783c",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(config);
firebase.firestore();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  user:userReducer,
  firebase:firebaseReducer,
  firestore:firestoreReducer,
})

const middlewares = [
  thunk.withExtraArgument(getFirebase,getFirestore,useFirebase)
]

const store = createStore(
  rootreducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);


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
