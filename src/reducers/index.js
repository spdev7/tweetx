// import { REQUEST_AUTHENTICATION } from "../actions";

const initialState = {
  isAuthenticated: false,
  post: [
    {
      id: 1,
      name: "Saurav Prakash",
      tweet: "Revisiting 2020 in future would be interesting",
      time: "12",
      followers: [],
    },
    {
      id: 1,
      name: "Saurav Prakash",
      tweet: "Latest SpaceX launch was amazing",
      time: "12",
      followers: [],
    },
  ],
  userpost: [
    {
      id: 1,
      name: "Obama",
      following: false,
      totaltweets: 2,
      tweets: [
        {
          id: 1,
          totaltweets: 2,
          name: "Obama",
          time: "12",
          tweet:
            "Thank you for everything. My last ask is the same as my first. I'm asking you to believe",
        },
        { id: 2,totaltweets: 2, name: "Obama", time: 15, tweet: "Four more years" },
      ],
    },
    {
      id:2,
      name:"mrBeast",
      following:false,
      totaltweets:1,
      tweets:[
        {
          id:1,
          totaltweets:1,
          name:"mrBeast",
          time:'14',
          tweet:
          "I’m going to give 100 random people who retweet this $100. Normally I’d give one person $10,000 but I want to give you guys better odds of winning :)"
        }
      ]
    },
    {
      id:3,
      name:"ellen",
      following:false,
      totaltweets:1,
      tweets:[
        {
          id:1,
          totaltweets:1,
          name:"ellen",
          time:'14',
          tweet:
          "If only Bradley's arm was longer. Best photo ever. #oscars "
        }
      ]
    }
  ],
  xpost:[],
};

const userReducer = (state = initialState, action) => {
  const newState = { ...state };
  console.log(action);
  switch (action.type) {
    case "REQUEST_AUTHENTICATION":
      newState.isAuthenticated = !newState.isAuthenticated;
    case "ADD_TWEET":
      newState.post = [
        ...newState.post,
        {
          id: "5",
          tweet: action.tweet,
          name: "Saurav Prakash",
          time: new Date().getMinutes(),
          followers: [],
        },
      ];
      return newState;
    case "ADD_TWEET_ERROR":
      console.log("add tweet error", action.tweet);
    case "FOLLOW_USER":
      const h1 = newState.userpost.find((x) => x.name == action.name)
      newState.xpost = [
        ...newState.xpost,
        h1
      ]
      return newState;
    default:
      return newState;
  }
  return newState;
};

export default userReducer;
