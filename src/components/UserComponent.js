import React from 'react'
import Card from './Card';
import UserCard from './UserCard';
import {connect} from 'react-redux'

const UserComponent = (props) => {
    const { post } = props;

    return (
        <div style={{maxWidth:"600px",margin:"0 auto"}}>
           {post.map((item) => <UserCard  page={"user"} data={item} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.user.post
    }
}

export default connect(mapStateToProps,null)(UserComponent)
