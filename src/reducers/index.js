// import { REQUEST_AUTHENTICATION } from "../actions";

const initialState = {
  isAuthenticated: true,
  data: [{ id: 1, tweets: [], followers: 0, following: 0 }],
};
const rootreducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'REQUEST_AUTHENTICATION':
      newState.isAuthenticated = !newState.isAuthenticated;
    case 'ADD_TWEET':
      console.log('created project',action.tweet)
  }
  return newState;
};


export default rootreducer;
