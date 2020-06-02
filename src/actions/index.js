const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION';


export const request_auth = () => {
    return {
        type: REQUEST_AUTHENTICATION
    }
};

export const add_post = (tweet) => {
    return (dispatch,getState,{getFirestore}) => {
        const sampleTweet = {
            tweet:tweet,
            name:'Saurav',
            id:1,
            created: new Date(),
        }
        const firestore = getFirestore();
        firestore.collection('users').add(sampleTweet)   
        .then(() => {
            dispatch({type:'ADD_TWEET',tweet})
        }).catch(err => {
            dispatch({ type: 'ADD_TWEET_ERROR' }, err);
          });
    }
}