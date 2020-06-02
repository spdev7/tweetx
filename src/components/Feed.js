import {connect } from 'react-redux'
import {add_post} from '../actions'
import React from 'react'
import Write from './Write'
import Card from './Card';
import UserCard from './UserCard';

const Feed = () => {
    return (
        <div className="feed_new">
            <Write />
            {/* <Card/>
            <UserCard/> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_post: (tweet) => dispatch(add_post(tweet)),
    }
}
export default connect(null,mapDispatchToProps)(Write)
