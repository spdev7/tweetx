const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION';


export const request_auth = () => {
    return {
        type: REQUEST_AUTHENTICATION
    }
};

export const add_post = (tweet) => {
    return (dispatch,getState) => {
        dispatch({type:'ADD_TWEET',tweet})
    }
}