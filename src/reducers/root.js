import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import userReducer from './index';
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
    user:userReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
  })

export default rootreducer