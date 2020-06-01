import { REQUEST_AUTHENTICATION } from "../actions";

export default rootreducer = (state,action) => {
  switch (action.type) {
    case REQUEST_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true,
      };
  }
};
