// import { REQUEST_AUTHENTICATION } from "../actions";

const initialState = {
  isAuthenticated: true,
};
const rootreducer = (state = initialState, action) => {
  const newState = { ...state };

  if(action.type == "REQUEST_AUTHENTICATION"){
      newState.isAuthenticated = !newState.isAuthenticated
  }
  return newState;
};

export default rootreducer;
