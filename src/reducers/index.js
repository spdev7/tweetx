// import { REQUEST_AUTHENTICATION } from "../actions";

const initialState = {
  isAuthenticated: true,
  post: [
    {
      id: 1,
      name: "Saurav Prakash",
      tweet: "What a sunny day",
      time: "12",
      followers: [],
    },
    {
      id: 2,
      name: "Paurav srakash",
      tweet: "This is how it should be done",
      time: "14",
      followers: [],
      following:false,
    }
  ],
};
const userReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "REQUEST_AUTHENTICATION":
      newState.isAuthenticated = !newState.isAuthenticated;
    case "ADD_TWEET":
      console.log("created project", action.tweet);
    case "ADD_TWEET_ERROR":
      console.log("add tweet error", action.tweet);
    default:
      return newState;
  }
  return newState;
};

export default userReducer;
