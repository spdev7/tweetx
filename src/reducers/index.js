// import { REQUEST_AUTHENTICATION } from "../actions";

const initialState = {
  isAuthenticated: true,
  post: [
    {
      id: 1,
      name: "Saurav Prakash",
      tweet: "Finally corona virus is over and Now can go for a walk",
      time: "12",
      followers: [],
    },
    {
      id: 1,
      name: "Saurav Prakash",
      tweet: "Finally corona virus is over and Now can go for a walk",
      time: "12",
      followers: [],
    }
  ],
  xpost: [
    {
      id: 1,
      name: "Ramesh",
      tweet: "Finally corona virus is over and Now can go for a walk",
      time: "12",
      followers: [],
    },
    {
      id: 1,
      name: "Vimesh",
      tweet: "Finally corona virus is over and Now can go for a walk",
      time: "12",
      followers: [],
    }
  ]
,
  userpost: [
    {
      id: 1,
      name: "Saurav Prakash",
      following: false,
      totaltweets: 3,
      tweets: [
        { id:1,
          name: "Saurav Prakash",
          time: "12",
          tweet: "lsdkajfjljejewkfj;lkwessadflkneagnw" 
        },
        { id:2,name: "Saurav Prakash",time: 15, tweet: "alrekgjaljlkejlgjaggj" },
        { id:3,name: "Saurav Prakash",time: 13, tweet: "agkjwrkjdnsadalwneks" },
      ],
    },
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
    case "FOLLOW_USER":
      newState.userpost = [
        ...newState.userpost,
        {
          id: 1,
      name: "Saurav Prakash",
      following: true,
      totaltweets: 3,
      tweets: [
        { name: "Saurav Prakash",time: 12, tweet: "lsdkajfjljejewkfj;lkwessadflkneagnw" },
        { name: "Saurav Prakash",time: 15, tweet: "alrekgjaljlkejlgjaggj" },
        { name: "Saurav Prakash",time: 13, tweet: "agkjwrkjdnsadalwneks" },
      ]
        }
      ]
    default:
      return newState;
  }
  return newState;
};

export default userReducer;
